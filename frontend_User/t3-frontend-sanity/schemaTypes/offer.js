export default {
  name: 'offers',
  title: 'Offers',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Offer Text',
      type: 'string',
      description: 'Main text for the offer (e.g., Free Shipping | ₹15 2-Day Over ₹75)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Offer Link',
      type: 'url',
      description: 'Optional link for more details (leave empty if not needed)',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).optional(),
    },
  ],
}
