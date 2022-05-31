import {urlFor} from "../../lib/sanity";
const PostAuthorOneImage = ({author}) => {
    return (
        <div className="flex-shrink-0">
            <div>
                {author?.image && (
                    <img className="h-10 w-10 rounded-full mr-3"
                         src={urlFor(author?.image)
                             .width(80)
                             .height(80)
                             .auto('format')
                             .url()}
                         alt={`Profile pictures of ${author?.name}`}
                    />
                )}
            </div>
        </div>
    )
}

export default PostAuthorOneImage