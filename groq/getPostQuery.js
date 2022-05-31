import groq from "groq";

export function getPostQuery() {
    const query = groq`
        *[_type == "post" && slug.current == $slug]
        {
           _id,
           _type,
            abstract,
            authors[]->
            {
                _type == 'person' => @
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
            slug,
            title,
            "estimatedReadingTime": 5  
        }
    `
    return query.replace(/\s/gm,'');
}