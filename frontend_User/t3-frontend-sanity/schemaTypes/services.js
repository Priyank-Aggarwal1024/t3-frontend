export default {
  name: 'service',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Service Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Service Icon (SVG)',
      description: 'Upload an SVG icon for the service.',
      options: {
        accept: '.svg',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required().max(150),
    },
    {
      name: 'link',
      type: 'url',
      title: 'Learn More Link',
      description: 'URL for more details about this service.',
    },
  ],
}
