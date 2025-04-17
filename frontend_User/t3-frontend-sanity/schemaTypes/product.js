export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      initialValue: 'High-quality sports product designed for durability and performance.', // Default value
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: (Rule) => Rule.min(1).error('At least one image is required'),
      description: 'Upload multiple product images at once by selecting or dragging them here.',
    },
    {
      name: 'video',
      title: 'Product Video',
      type: 'file',
      description: 'Upload a product video to showcase features',
      options: {
        accept: 'video/*',
      },
    },
    {
      name: 'sizeChart',
      title: 'Size Chart',
      type: 'image',
      description: 'Upload a size chart image for this product',
    },
    {
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.min(1).error('Select at least one size'),
      initialValue: ['SM'], // Default size
    },
    {
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Color Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'hex',
              title: 'Color Hex Code',
              type: 'string',
              validation: (Rule) =>
                Rule.required().regex(/^#([0-9A-F]{3}){1,2}$/i, {
                  name: 'hex code',
                  invert: false,
                  message: 'Enter a valid hex color code (e.g., #FF5733)',
                }),
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'hex',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).error('Select at least one color'),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
      description: 'Select the category, subcategory, or sub-subcategory this product belongs to',
    },
    {
      name: 'discount',
      title: 'Discount Price',
      type: 'number',
    },
    {
      name: 'productCode',
      title: 'Product Code',
      type: 'string',
      description: 'Automatically generated unique product code',
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Used to sort products in the category',
      initialValue: 0,
    },
  ],
}
