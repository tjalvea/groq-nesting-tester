import dynamic from "next/dynamic";

const PostsAbstractWithImages = dynamic(() => import("./PostsAbstractWithImages").then((mod) => mod.default));

const PostsCollection = ({section}) => {
    return (
        <div className="bg-white dark:bg-neutral-800 overflow-hidden py-3 lg:py-6 pt-12 lg:pt-24">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 sm:max-w-7xl">
                <PostsAbstractWithImages section={section} />
            </div>
        </div>
    )
}

export default PostsCollection
