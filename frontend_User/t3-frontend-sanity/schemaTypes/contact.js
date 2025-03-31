export default {
  name: 'contact',
  title: 'Contact Details',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Header Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'branches',
      title: 'Branches',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Branch Name',
              type: 'string',
            },
            {
              name: 'addressLine1',
              title: 'Address Line 1',
              type: 'string',
            },
            {
              name: 'addressLine2',
              title: 'Address Line 2',
              type: 'string',
            },
            {
              name: 'addressLine3',
              title: 'Address Line 3',
              type: 'string',
            },
            {
              name: 'phone',
              title: 'Phone Number',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
