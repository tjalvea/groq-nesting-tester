Test project for groq quries
## Getting Started

There are two categoryFilters in the postCollection schema: `categoryFilter` and `categoryFilterOld`.
The old one works, the new does not.

For the old one, a categoryFilter in postCollection could only have a reference to a single category.
For the new one, the categoryFilter is an array of references to category.

To test, replace the groq for fetching 'posts' in groq/getPageQuery. 
```bash
# this is the new filter that does not work.
'posts': *[_type == "post" && category._ref in ^.categoryFilter[]._ref]

# this is the old filter that works.
'posts': *[_type == "post" && category._ref == ^.categoryFilterOld._ref]
```
