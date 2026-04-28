import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const slugField = z
  .string()
  .trim()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase kebab-case slugs.');

const stateCodeField = z
  .string()
  .trim()
  .length(2)
  .regex(/^[a-z]{2}$/, 'Use two-letter lowercase state codes.');

const sourceField = z.object({
  name: z.string().trim().min(1),
  url: z.string().trim().url().optional()
});

const contactField = z
  .object({
    mainPhone: z.string().trim().min(1),
    visitingOffice: z.string().trim().min(1).optional(),
    email: z.string().trim().email().optional(),
    emergencyHotline: z.string().trim().min(1).optional(),
    mailingAddress: z.string().trim().min(1).optional(),
    fax: z.string().trim().min(1).optional()
  })
  .passthrough();

const linkField = z.record(z.string(), z.string().trim().url());
const stringRecordField = z.record(z.string(), z.string().trim().min(1));

const nationalGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/national-guides' }),
  schema: z
    .object({
      title: z.string().trim().min(1),
      slug: slugField,
      description: z.string().trim().min(1).optional(),
      summary: z.string().trim().min(1).optional(),
      order: z.number().int().positive().optional(),
      relatedTopics: z.array(slugField).optional(),
      sources: z.array(sourceField).optional(),
      lastReviewed: z.coerce.date().optional(),
      draft: z.boolean().optional().default(false)
    })
    .strict()
});

const states = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/states' }),
  schema: z
    .object({
      title: z.string().trim().min(1),
      slug: slugField,
      state: stateCodeField,
      // Required — these appear on every state page and in cards
      abbreviation: z.string().trim().min(2).max(3, 'Abbreviation must be 2-3 letters'),
      system: z.string().trim().min(1, 'System is required (e.g., CDCR, TDCJ)'),
      systemFullName: z.string().trim().min(1, 'Full system name is required'),
      summary: z.string().trim().min(1, 'Summary is required — shows on the state card'),
      facilityCount: z.number().int().nonnegative('Facility count is required'),
      lastReviewed: z.coerce.date(),
      // Optional
      terminology: stringRecordField.optional(),
      hotlines: stringRecordField.optional(),
      links: linkField.optional(),
      draft: z.boolean().optional().default(false)
    })
    .strict()
});

const stateGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/state-guides' }),
  schema: z
    .object({
      title: z.string().trim().min(1),
      slug: slugField,
      state: stateCodeField,
      topic: slugField.optional(),
      description: z.string().trim().min(1).optional(),
      summary: z.string().trim().min(1).optional(),
      relatedNationalGuide: slugField.optional(),
      system: z.string().trim().min(1).optional(),
      order: z.number().int().positive().optional(),
      sources: z.array(sourceField).optional(),
      lastReviewed: z.coerce.date().optional(),
      draft: z.boolean().optional().default(false)
    })
    .strict()
});

const facilities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/facilities' }),
  schema: z
    .object({
      title: z.string().trim().min(1),
      slug: slugField,
      state: stateCodeField,
      // Required for the facility to be useful — every facility page MUST have these
      system: z.string().trim().min(1, 'System is required (e.g., CDCR, TDCJ, FDC)'),
      summary: z.string().trim().min(1, 'Summary is required — appears in cards and SEO'),
      city: z.string().trim().min(1, 'City is required'),
      address: z.string().trim().min(1, 'Address is required for directions link'),
      facilityType: z.string().trim().min(1, 'Facility type is required (e.g., State Prison, State Jail)'),
      // Optional but recommended
      aliases: z.array(z.string().trim().min(1)).optional(),
      county: z.string().trim().min(1).optional(),
      securityLevel: z.string().trim().min(1).optional(),
      contact: contactField,
      providers: stringRecordField.optional(),
      coordinates: z
        .object({
          latitude: z.number(),
          longitude: z.number()
        })
        .optional(),
      visiting: z
        .object({
          days: z.string().trim().min(1).optional(),
          hours: z.string().trim().min(1).optional(),
          scheduling: z.string().trim().min(1).optional(),
          contactVisits: z.boolean().optional(),
          videoVisits: z.boolean().optional(),
          note: z.string().trim().min(1).optional()
        })
        .passthrough()
        .optional(),
      links: linkField.optional(),
      lastVerified: z.coerce.date(),
      reviewBy: z.coerce.date(),
      draft: z.boolean().optional().default(false)
    })
    .strict()
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z
    .object({
      title: z.string().trim().min(1),
      slug: slugField,
      description: z.string().trim().min(1).optional(),
      summary: z.string().trim().min(1).optional(),
      draft: z.boolean().optional().default(false)
    })
    .strict()
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z
    .object({
      title: z.string().trim().min(1),
      slug: slugField,
      description: z.string().trim().min(1).optional(),
      summary: z.string().trim().min(1).optional(),
      printLabel: z.string().trim().min(1).optional(),
      updatedAt: z.coerce.date().optional(),
      draft: z.boolean().optional().default(false)
    })
    .strict()
});

export const collections = {
  'national-guides': nationalGuides,
  states,
  'state-guides': stateGuides,
  facilities,
  pages,
  tools
};
