import dynamic from "next/dynamic";

const PostsCollection = dynamic(() => import("../postsCollection/PostsCollection").then((mod) => mod.default));

const PageSections = ({page}) => {
    return (
        <div className="bg-white dark:bg-neutral-800">
            {page?.pageSections?.map((section) => (
                <div key={section._key}>
                    {(section?._type === 'postCollection')  && (
                        <PostsCollection section={section} />
                    )}
                </div>
            ))}
        </div>
    )
}

export default PageSections;
