import PageSections from "./PageSections";
import dynamic from "next/dynamic";

const PageHeader = dynamic(() => import("./PageHeader").then((mod) => mod.default));

const PageContent = ({page}) => {
    return (
        <div className="bg-white dark:bg-neutral-800">
            <PageHeader page={page} />
            <PageSections page={page} />
        </div>
    )
}

export default PageContent