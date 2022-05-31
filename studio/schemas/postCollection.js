export default {
    type: "object",
    name: "postCollection",
    title: "All posts from categories",
    fields: [
        {
            name: "categoryFilter",
            title: "Categories",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "category" }],
                },
            ],
        },
    ],
};
