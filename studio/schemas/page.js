import React from "react";

export default {
    type: 'document',
    name: 'page',
    title: 'Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
        },
        {
            name: 'pageSections',
            type: 'array',
            title: 'Page Sections',
            of: [
                { type: 'postCollection' },
            ]
        },
    ],
};
