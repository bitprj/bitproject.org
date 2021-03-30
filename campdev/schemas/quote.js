export default {
    name: 'quote',
    title: 'Quote',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
              },
        },
        {
            name: 'words',
            title: 'Words',
            type: 'string',
        },
    ]
}