import PostPublishDetailsTime from "./PostPublishDetailsTime";
import PostAuthorMultipleImages from "./PostAuthorMultipleImages";
import PostAuthorMultipleNames from "./PostAuthorMultipleNames";

const PostMultipleAuthorsFooter = ({authors, post}) => {
    return (
        <div>
            <div className="mt-6 mb-2 flex items-center">
                <PostAuthorMultipleImages authors={authors} />
                <div>
                    <PostAuthorMultipleNames authors={authors} post={post} />
                </div>
            </div>
            <PostPublishDetailsTime post={post} />
        </div>
    )
}

export default PostMultipleAuthorsFooter