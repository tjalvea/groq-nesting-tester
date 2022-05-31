import {slugFromCategoryAndTitle} from "../customSlugGenerator";

export default {
    name: "post",
    type: "document",
    title: "Post",
    initialValue: () => ({
        publishedAt: new Date().toISOString()
    }),
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{type: 'category'}],
        },
        slugFromCategoryAndTitle(doc => doc),
        {
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'person'},
                    ]
                }
            ]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            title: 'Abstract',
            name: 'abstract',
            type: 'text',
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published at',
        },
    ],
}