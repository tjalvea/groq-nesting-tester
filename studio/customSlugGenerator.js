import slugify from "slugify";
import client from "part:@sanity/base/client"

function formatSlug(input, slugStart) {
    if (typeof input === "undefined")
    {
        return slugStart;
    }
    const slug = slugify(input, { lower: true });
    return slugStart + slug;
}

export function slugForPage(input)
{
    return {
        name: `slug`,
        type: `slug`,
        options: {
            source: input,
            slugify: (value) => slugify(value, {lower: true})
        }
    }
}

export function slugFromCategoryAndTitle(document) {
    let slugStart = '';

    return {
        name: `slug`,
        type: `slug`,
        options: {
            source: document,
            slugify: async document => {
                const slugFromCategory = await client.fetch(
                    `*[_id == $id][0]{'slug': parentPage->slug.current}`,
                    {
                        id: document?.category?._ref,
                    }
                );
                slugStart = slugFromCategory?.slug ? `${slugFromCategory.slug}/` : ``;
                return formatSlug(document?.title, slugStart);
            }
        },
        validation: (Rule) =>
            Rule.required().custom(({ current }) => {
                if (typeof current === "undefined") {
                    return true;
                }

                if (current) {
                    if (!current.startsWith(slugStart)) {
                        return `Slug must begin with "${slugStart}". Click "Generate" to reset.`;
                    }

                    if (current === slugStart) {
                        return `Slug cannot be empty`;
                    }

                    if (current.endsWith("/")) {
                        return `Slug cannot end with "/"`;
                    }
                }

                return true;
            }),
    };
}