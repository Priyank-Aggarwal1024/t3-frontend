export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'large',
      title: 'Large Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload the large banner image',
    },
    {
      name: 'small',
      title: 'Small Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload the small banner image',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'URL where the banner should redirect',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the call-to-action button',
    },
  ],
}
