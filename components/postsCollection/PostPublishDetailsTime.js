const PostPublishDetailsTime = ({post}) => {
    return (
        <div className="flex space-x-1 text-sm text-gray-500 dark:text-neutral-100">
            <time dateTime={post?.publishedAt}>{new Date(post?.publishedAt).toLocaleDateString('no-NO', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post?.estimatedReadingTime} minutter lesetid</span>
        </div>
    )
}

export default PostPublishDetailsTime