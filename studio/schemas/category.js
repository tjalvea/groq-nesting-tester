export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'parentPage',
            title: 'Parent Page',
            type: 'reference',
            to: [{type: 'page'}],
            options: {
                disableNew: true,
            }
        }
    ]
}