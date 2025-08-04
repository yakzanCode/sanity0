import { defineType, defineField } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Recommended: 50–60 characters for search engines',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Recommended: 150–160 characters for search engines',
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Comma-separated keywords (optional)',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Used for social sharing preview (Facebook, Twitter, etc.)',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Helps avoid duplicate content issues',
    }),
  ],
})
