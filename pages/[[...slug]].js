import groq from "groq";
import { getClient } from "../lib/sanity.server";
import { getPageQuery } from "../groq/getPageQuery";

export async function getStaticPaths() {
  const pageQueries = await getClient().fetch(
      groq`*[_type in ["page", "post"] && defined(slug.current)][].slug.current`
  );

  // Split the slug strings to arrays (as required by Next.js)
  const paths = pageQueries.map((slug) => ({
    params: { slug: slug.split("/").filter((p) => p) },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const client = await getClient(preview);

  // Every website has a bunch of global content that every page needs, too!
  // const globalSettings = await client.fetch(globalSettingsQuery);

  // A helper function to work out what query we should run based on this slug
  const { query, queryParams, docType } = getQueryFromSlug(params.slug);

  // Get the initial data for this page, using the correct query
  const pageData = await client.fetch(query, queryParams);

  return {
    props: {
      preview,
      data: { query, queryParams, docType, pageData }, //globalSettings
    },
  };
}

function getQueryFromSlug(slugArray = []) {
  const docQuery = {
    home: getPageQuery(),
    news: getPostQuery(),
    page: getPageQuery(),
  };

  let docType = "";

  if (slugArray.length === 0) {
    return {
      docType: "home",
      queryParams: { slug: "homePage" },
      query: docQuery.home,
    };
  }

  const [slugStart] = slugArray;

  // We now have to re-combine the slug array to match our slug in Sanity.
  let queryParams = { slug: `${slugArray.join("/")}` };

  // Keep extending this section to match the slug against the docQuery object keys
  if (docQuery.hasOwnProperty(slugStart)) {
    docType = slugStart;
  } else if (slugArray.length === 2) {
    docType = "news";
  } else {
    docType = `page`;
  }

  return {
    query: docQuery[docType],
    queryParams,
    docType,
  };
}
import { usePreviewSubscription } from "../utils/sanity";
import { filterDataToSingleItem } from "../utils/previewHelper";
import React from "react";
import {getPostQuery} from "../groq/getPostQuery";
import dynamic from "next/dynamic";

const PageSingle = dynamic(() =>
    import("../components/page/PageContent").then((mod) => mod.default)
);
const NewsSingle = dynamic(() =>
    import("../components/post/PostContent").then((mod) => mod.default)
);

export default function Page({ data, preview }) {
  const { data: pageData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.pageData,
    enabled: preview,
  });

  const page = filterDataToSingleItem(pageData, preview);
  const docType = page?._type;

  return (
      <>
        {docType === "home" && <PageSingle page={page} />}
        {docType === "page" && <PageSingle page={page} />}
        {docType === "post" && <NewsSingle post={page} />}
      </>
  );
}
