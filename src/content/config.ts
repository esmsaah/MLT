import { defineCollection, z } from 'astro:content';

// Essays — each one becomes its own page at /essays/<slug>
const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tag: z.string().default('Essay'), // e.g. Manifesto, Debate, Genealogy
    date: z.coerce.date(),
    summary: z.string(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Podcast / MLT Conversations episodes — mostly a link to Spotify/YouTube
const episodes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tag: z.string().default('Conversation'),
    date: z.coerce.date(),
    summary: z.string().optional(),
    link: z.string().url().optional(), // Spotify / YouTube / Apple link
    embed: z.string().optional(), // optional <iframe> embed code
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays, episodes };
