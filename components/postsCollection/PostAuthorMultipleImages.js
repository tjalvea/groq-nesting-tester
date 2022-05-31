import {urlFor} from "../../lib/sanity";

function authorImageOffset(index) {
    switch (index) {
        case 0:
            return 'z-30';
            break;
        case 1:
            return 'z-20';
            break;
        case 2:
            return 'z-10 -ml-2';
            break;
        case 3:
            return 'z-0 -ml-2';
            break;
        default:
            return 'z-30';
            break;

    }
}

const PostAuthorMultipleImages = ({authors}) => {
    return (
        <div className="flex -space-x-2 relative z-0 overflow-hidden mr-3">
            {authors?.map((author, index) => (
                <div key={author?._id}>
                    {author?.image && (
                        <img className={'relative inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-neutral-700 '.concat(authorImageOffset(index))}
                             src={urlFor(author?.image)
                                 .width(72)
                                 .height(80)
                                 .auto('format')
                                 .url()}
                             alt={`Profile pictures of ${author?.name}`}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}

export default PostAuthorMultipleImages