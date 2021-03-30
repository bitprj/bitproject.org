export default {
  name: 'programs',
  title: 'Programs',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: ' image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cta1',
      title: 'CTA1',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cta1link',
      title: 'CTA1 Link',
      type: 'url',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cta2',
      title: 'CTA2',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cta2link',
      title: 'CTA2 Link',
      type: 'url',
      validation: Rule => Rule.required(),
    },
    {
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'quote',
        }
      ]
    },
  ],
}
