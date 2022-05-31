import Link from "next/link";
import PostPublishDetails from "./PostPublishDetails";
import React from "react";
import {urlFor} from "../../lib/sanity";

function colorForCategory(categoryName) {
  switch (categoryName) {
    case "News":
      return "bg-pink-100 text-pink-800 dark:bg-pink-700 dark:text-white";
      break;
    case "Marketing":
      return "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-white";
      break;
    case "Blog":
      return "bg-green-100 text-green-800 dark:bg-green-700 dark:text-white";
      break;
    case "Jobs":
      return "bg-amber-100 text-amber-800 dark:bg-amber-700 dark:text-white";
      break;
    default:
      return "bg-orange-100 text-orange-800 dark:bg-orange-700 dark:text-white";
      break;
  }
}

const PostsAbstractWithImages = ({ section }) => {
  const posts = section?.posts;
  return (
    <section
      className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
      aria-labelledby={`${section?._key}-aria-label`}>
      {posts?.map((post) => (
        <div
          key={post?.title}
          className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            {post?.image && (
                <img
                    className="h-48 w-full object-cover"
                    src={urlFor(post?.image)
                        .width(400)
                        .height(200)
                        .auto("format")
                        .url()}
                    alt=""
                />
            )}
          </div>
          <div className="bg-white flex flex-1 flex-col justify-between p-6 dark:bg-neutral-700">
            <div className="flex-1">
              <div>
                <div>
                  <span
                    className={colorForCategory(post.category).concat(
                      " inline-flex items-center rounded px-3 py-0.5 text-sm font-medium"
                    )}>
                    {post.category}
                  </span>
                </div>
              </div>
              <Link href={`/${post?.slug?.current}`}>
                <a className="mt-2 block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-neutral-800">
                  <p className="text-gray-900 text-xl font-semibold dark:text-white">
                    {post?.title}
                  </p>
                  <div className="text-gray-500 mt-3 text-base dark:text-neutral-100 ">
                    {post?.abstract}
                  </div>
                </a>
              </Link>{" "}
            </div>
            <PostPublishDetails post={post} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default PostsAbstractWithImages;
