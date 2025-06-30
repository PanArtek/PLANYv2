import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(['biuro', 'sklep', 'restauracja', 'hotel', 'medyczne', 'edukacja']),
    client: z.string(),
    location: z.string(),
    area: z.number(),
    completionDate: z.date(),
    featured: z.boolean().default(false),
    mainImage: z.string(),
    gallery: z.array(z.string()),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
};