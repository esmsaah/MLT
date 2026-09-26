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

  // Editors / authors
  editors: [
    { name: 'Emin Poljarevic', role: 'Editor' },
    { name: 'Ivan Ejub Kostić', role: 'Editor' },
  ],
  publisher: 'Wiley Blackwell',
  isbn: '978-1-394-28248-7', // from the real cover — great for SEO
  publishYear: '2026',

  // Where to buy / discover the book  (TODO: replace with real link)
  buyUrl: 'https://www.wiley.com/',

  // Podcast / MLT Conversations  (TODO: paste embed + platform links when ready)
  podcast: {
    // Paste the <iframe ...> embed code from Spotify/Apple/YouTube here (as a string).
    // Leave empty ('') to show a "coming soon" placeholder instead.
    embedHtml: '',
    spotifyUrl: '',
    appleUrl: '',
    youtubeUrl: '',
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
  { label: 'What is MLT?', href: '#what-is-mlt' },
  { label: 'The Companion', href: '#companion' },
  { label: 'Conversations', href: '#conversations' },
  { label: 'Essays', href: '#essays' },
];

// Endorsements / blurbs for the Companion section
export const ENDORSEMENTS = [
  {
    quote:
      'The Companion is unparalleled in its scope and depth and will remain the standard reference work on Muslim liberation theologies for the foreseeable future.',
    name: 'Asma Afsaruddin',
    title: 'Professor of Middle Eastern Languages and Cultures, Indiana University',
  },
  {
    quote:
      'This remarkable volume explores how Muslims turn the ethical resources of their faith into practices of dignity, solidarity and resistance.',
    name: 'Jonathan Brown',
    title:
      'Professor and Alwaleed bin Talal Chair of Islamic Civilization, Georgetown University',
  },
  {
    quote:
      'The most rigorous exploration in the topic so far. This is a must read across humanities, as well as religious studies.',
    name: 'Heba Raouf Ezzat',
    title: 'Assistant Professor of Political Science, Ibn Haldun University',
  },
  {
    quote:
      'With thirty contributions encompassing multiple subjects and addressing the world’s diverse regions, it is thematically fascinating, methodologically gripping, and intellectually engaging.',
    name: 'Irfan Ahmad',
    title: 'Professor of Anthropology and Sociology, Ibn Haldun University',
  },
];
