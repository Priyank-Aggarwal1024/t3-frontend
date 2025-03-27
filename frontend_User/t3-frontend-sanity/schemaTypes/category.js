export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'parent',
      title: 'Parent Category',
      type: 'reference',
      to: [{type: 'category'}],
      description: 'Select a parent category if this is a subcategory',
    },
    {
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Enter a number to determine the sorting order of categories',
      validation: (Rule) => Rule.required().integer(),
      initialValue: 0,
    },
  ],
}
