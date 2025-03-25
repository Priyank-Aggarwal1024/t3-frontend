export default {
  name: 'topSellingProducts',
  title: 'Top Selling Products',
  type: 'document',
  fields: [
    {
      name: 'products',
      title: 'Top Selling Products',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      validation: (Rule) => Rule.min(1).error('Add at least one top-selling product'),
      description: 'Select the products that are top-selling.',
    },
  ],
}
