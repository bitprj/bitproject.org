export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'weeks',
      title: 'Weeks',
      type: 'array',
      of: [
        {
          name: 'week',
          title: 'Week name',
          type: 'week',
        }
      ]
    },
    {
      title: 'Blogs',
      name: 'blogs',
      type: 'array',
      of: [{
          type: 'reference', 
          to: [
            {type: 'post'},
          ] 
        }
    
      ],
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'url',
      validation: Rule => Rule.required(),
    },
  ],
  

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
