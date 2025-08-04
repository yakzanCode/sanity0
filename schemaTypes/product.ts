import { defineType, defineField } from 'sanity'
import { seoType } from './objects/seo'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  orderings: [
    {
      title: 'Price, High to Low',
      name: 'priceDesc',
      by: [{ field: 'price', direction: 'desc' }]
    },
    {
      title: 'Price, Low to High',
      name: 'priceAsc',
      by: [{ field: 'price', direction: 'asc' }]
    },
    {
      title: 'Name, A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }]
    },
  ],

  preview: {
    select: {
      title: 'name',
      images: 'images',
      category: 'category.name',
      price: 'price'
    },
    prepare({ title, images, category, price }) {
      return {
        title,
        subtitle: `${category ? category + ' – ' : ''}$${price?.toFixed(2) || '0.00'}`,
        media: images && images.length > 0 ? images[0] : undefined
      }
    }
  },

  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required()
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
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'priceBeforeSale',
      title: 'Price Before Sale',
      type: 'number'
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'usage',
      title: 'Usage',
      type: 'string'
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string'
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(5)
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),

    // ✅ Reusable SEO object
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})