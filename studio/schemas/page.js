import React from "react";
import {slugForPage} from "../customSlugGenerator";

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
        slugForPage('title'),
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
