export default function PostContentWrapper ({children}) {
    return (
        <>
            <div className="mt-6 prose prose-lg lg:prose-xl text-gray-500 dark:text-neutral-400 mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </>
    )
}