const PostAuthorMultipleNames = ({authors, post}) => {
    return (
        <div aria-labelledby={`${post?._id}-authors-aria-label`} className="text-sm font-medium text-gray-900">
            <p id={`${post?._id}-authors-aria-label`} className="sr-only"><em>Forfattere</em></p>
            {authors?.map((author, index) => (
                <span key={author?._id}>
                    {(index > 0) && (
                        <span>, </span>
                    )}
                    {author?.name}
                </span>
            ))}
        </div>
    )
}

export default PostAuthorMultipleNames