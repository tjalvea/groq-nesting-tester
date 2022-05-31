import PostHeader from "./PostHeader";

const PostContent = ({post}) => {
    return (
        <article>
            <div className="relative pt-16 bg-white dark:bg-neutral-800 overflow-hidden">
                <div className="relative">
                    <PostHeader post={post} />
                </div>
            </div>
        </article>
    )
}

export default PostContent