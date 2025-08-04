import { defineField, defineType } from 'sanity'
import { seoType } from './objects/seo'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',

  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  },

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (slug, ctx) => ctx.defaultIsUnique(slug, ctx)
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // ✅ Reusable SEO object
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})

