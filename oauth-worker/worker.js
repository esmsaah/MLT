// Decap CMS ↔ GitHub OAuth handler for Cloudflare Workers.
// Lets the /admin panel log in with GitHub without exposing the client secret.
// Secrets required (set via `wrangler secret put`): GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET

const PROVIDER = 'github';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname, searchParams } = url;

    // Step 1 — start login: redirect the popup to GitHub's authorize page
    if (pathname === '/auth') {
      const authorize = new URL('https://github.com/login/oauth/authorize');
      authorize.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      authorize.searchParams.set('redirect_uri', `${url.origin}/callback`);
      authorize.searchParams.set('scope', searchParams.get('scope') || 'repo,user');
      authorize.searchParams.set('state', crypto.randomUUID());
      return Response.redirect(authorize.toString(), 302);
    }

    // Step 2 — GitHub sends the user back here with a code; swap it for a token
    if (pathname === '/callback') {
      const code = searchParams.get('code');
      if (!code) return new Response('Missing "code"', { status: 400 });

      const tokenResp = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'User-Agent': 'mlt-cms-auth',
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const data = await tokenResp.json();

      const ok = Boolean(data.access_token);
      const status = ok ? 'success' : 'error';
      const payload = ok
        ? JSON.stringify({ token: data.access_token, provider: PROVIDER })
        : JSON.stringify({ error: data.error_description || 'Authentication failed' });

      // Hand the token back to the CMS window via postMessage
      const html = `<!doctype html><html><body><script>
(function () {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:${PROVIDER}:${status}:${payload}',
      e.origin
    );
    window.removeEventListener('message', receiveMessage, false);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:${PROVIDER}', '*');
})();
</script><p>Completing sign-in…</p></body></html>`;

      return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    }

    return new Response('MLT CMS auth worker. Use /auth to sign in.', {
      headers: { 'Content-Type': 'text/plain' },
    });
  },
};
