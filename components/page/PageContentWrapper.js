export default function PageContentWrapper ({children}) {
    return (
        <>
            <div className="overflow-hidden">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 sm:max-w-7xl">
                    <div className="relative">
                        <div className="sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-8 sm:items-center">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}