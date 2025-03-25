export default {
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      description: "Enter the brand's name.",
      validation: (Rule) => Rule.required().min(2).max(50),
    },
    {
      name: 'small',
      title: 'Small Brand Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Upload a small version of the brand image.',
    },
    {
      name: 'large',
      title: 'Large Brand Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Upload a large version of the brand image.',
    },
  ],
}
