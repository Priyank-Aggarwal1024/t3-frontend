export default {
  name: 'shopByCategory',
  title: 'Shop by Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Category Slug (Unique ID)',
      type: 'slug',
      options: {
        source: 'title', // Auto-generate from title
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
      description: 'Upload an image representing this category',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      validation: (Rule) => Rule.min(1).error('Select at least one product'),
      description: 'Select products under this category',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'image',
    },
  },
}
