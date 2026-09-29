// =============================================================
//  SITE CONFIG — edit everything here. No need to touch the code.
//  (Sve što se mijenja je ovdje — naslov, autori, linkovi, podcast.)
// =============================================================

export const SITE = {
  // Domain you will buy (used for SEO canonical URLs + sitemap).
  url: 'https://muslimliberation.com',

  // Project / book
  projectName: 'Muslim Liberation Theology',
  bookTitle: 'The Companion to Muslim Liberation Theology',
  bookTitleFull: 'The Wiley Blackwell Companion to Muslim Liberation Theology',
  tagline:
    'A living intellectual project that reclaims Islam as a resource for confronting domination and imagining liberation.',

  // SEO meta description shown in search results (kept about Muslim Liberation Theology
  // as its own distinct project — no equating it with the older term).
  description:
    'Muslim Liberation Theology — a distinct intellectual and theological project reclaiming Islam as a resource for justice, dignity, and liberation. Home of The Wiley Blackwell Companion to Muslim Liberation Theologies, edited by Emin Poljarević and Ivan Ejub Kostić.',
  // Hidden keyword list only (not visible copy) — helps searches for the older term
  // surface Muslim Liberation Theology, without stating equivalence anywhere on the page.
  keywords:
    'Muslim Liberation Theology, Muslim liberation theologies, Islamic liberation theology, liberation theology and Islam, trusteeship, amana, Islam and social justice, liberatory praxis, Sunni and Shia liberation, decolonial Islam, Islamophobia, Palestine, racial capitalism, Wiley Blackwell Companion, Emin Poljarević, Ivan Ejub Kostić',

  // Editors / authors
  editors: [
    {
      name: 'Emin Poljarević',
      role: 'Editor',
      photo: '/emin.png',
      photoPos: 'center 20%',
      affiliation:
        'Associate Professor of Islamic Theology and Philosophy, and Sociologist of Religion, Uppsala University',
      bio: 'Emin Poljarević is Associate Professor in Islamic Theology and Philosophy and a Sociologist of Religion at Uppsala University. He has published widely on Islamic ethics, Muslim social mobilization, Islamophobia in Europe, Malcolm X, and political and liberation theologies.',
    },
    {
      name: 'Ivan Ejub Kostić',
      role: 'Editor',
      photo: '/ejub.jpg',
      photoPos: '50% 42%',
      affiliation:
        'Research Fellow, Institute for Philosophy and Social Theory, University of Belgrade',
      bio: 'Ivan Ejub Kostić is a Research Fellow at the Institute for Philosophy and Social Theory, University of Belgrade. He has authored and edited several books on contemporary Islamic political thought, Islamic movements, and Islam in Europe and the Balkans.',
    },
  ],
  publisher: 'Wiley Blackwell',
  isbn: '978-1-394-28248-7', // from the real cover — great for SEO
  publishYear: '2026-12',
  numberOfPages: 592,

  // Where to buy / discover the book
  buyUrl:
    'https://www.wiley.com/en-us/shop/general-introductory-religion-theology/the-wiley-blackwell-companion-to-muslim-liberation-theologies-p-9781394282487',

  // Podcast / MLT Conversations  (TODO: paste embed + platform links when ready)
  podcast: {
    // Paste the <iframe ...> embed code from Spotify/Apple/YouTube here (as a string).
    // Leave empty ('') to show a "coming soon" placeholder instead.
    embedHtml: '',
    // TODO: replace with the real Spotify show URL when available
    spotifyUrl: 'https://open.spotify.com/search/muslim%20liberation%20theology',
    appleUrl: '',
    youtubeUrl: 'https://www.youtube.com/@muslimliberationtheology',
  },

  // Newsletter — MailerLite / Substack embed URL (TODO)
  newsletterActionUrl: '',

  // Social / contact (optional)
  social: {
    email: '',
    x: '',
    instagram: '',
  },

  // Open Graph share image (path inside /public). Replace og.png with a real one.
  ogImage: '/og.png',
};

// Navigation (anchors on the single-page site)
export const NAV = [
  { label: 'What is MLT?', href: '/#what-is-mlt' },
  { label: 'The Companion', href: '/#companion' },
  { label: 'Conversations', href: '/#conversations' },
  { label: 'Essays', href: '/#essays' },
  { label: 'Editors', href: '/editors' },
];

// Endorsements / blurbs for the Companion section
export const ENDORSEMENTS = [
  {
    quote:
      'The Companion is unparalleled in its scope and depth and will remain the standard reference work on Muslim liberation theologies for the foreseeable future.',
    name: 'Asma Afsaruddin',
    title: 'Professor of Middle Eastern Languages and Cultures, Indiana University',
    org: 'Indiana University',
  },
  {
    quote:
      'This remarkable volume explores how Muslims turn the ethical resources of their faith into practices of dignity, solidarity and resistance.',
    name: 'Jonathan Brown',
    title:
      'Professor and Alwaleed bin Talal Chair of Islamic Civilization, Georgetown University',
    org: 'Georgetown University',
  },
  {
    quote:
      'The most rigorous exploration in the topic so far. This is a must read across humanities, as well as religious studies.',
    name: 'Heba Raouf Ezzat',
    title: 'Assistant Professor of Political Science, Ibn Haldun University',
    org: 'Ibn Haldun University',
  },
  {
    quote:
      'With thirty contributions encompassing multiple subjects and addressing the world’s diverse regions, it is thematically fascinating, methodologically gripping, and intellectually engaging.',
    name: 'Irfan Ahmad',
    title: 'Professor of Anthropology and Sociology, Ibn Haldun University',
    org: 'Ibn Haldun University',
  },
];
