import groq from "groq";

export function getPageQuery() {
    const query = groq`
*[_type == "page" && slug.current == $slug]
{
    _id,
    _type,
    _updatedAt,
    title,
    slug,
    'pageSections': pageSections[]
    {
        _type == 'postCollection' => 
        {
            ...,
            _type,
            categoryFilter,
            categoryFilterOld,
            'posts': *[_type == "post" && category._ref in ^.categoryFilter[]._ref]
            {
                _id,
                _type,
                abstract,
                authors[]->
                {
                    _type == 'person' => 
                    {
                        _type,
                        _id,
                        name,
                        image,
                    }
                },
                'authorsCount': coalesce(length(authors),0),
                "category": category->title,
                image,
                publishedAt,
                title,
                "estimatedReadingTime": 5
            }
        },
    }
}
    `;

    return query.replace(/\s/gm, "");
}
