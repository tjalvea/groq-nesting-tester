const PostAuthorOneName = ({author, post}) => {
    return (
        <div aria-labelledby={`${post?._id}-author-aria-label`} className="text-sm font-medium text-gray-900">
            <p id={`${post?._id}-author-aria-label`} className="sr-only"><em>Forfatter</em></p>
            {author?.name}
        </div>
    )
}

export default PostAuthorOneName