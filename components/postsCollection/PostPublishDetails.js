import dynamic from "next/dynamic";
import React from "react";

const PostOneAuthor = dynamic(() =>
  import("./PostOneAuthor").then((mod) => mod.default)
);
const PostMultipleAuthorsFooter = dynamic(() =>
  import("./PostMultipleAuthorsFooter").then((mod) => mod.default)
);
const PostPublishDetailsTime = dynamic(() =>
  import("./PostPublishDetailsTime").then((mod) => mod.default)
);

const PostPublishDetails = ({ post, section }) => {
  return (
    <div>
      {post?.authorsCount == 0 && (
        <div className="mt-3">
          <PostPublishDetailsTime post={post} />
        </div>
      )}
      {post?.authors && post?.authorsCount == 1 && (
        <PostOneAuthor author={post?.authors[0]} post={post} />
      )}
      {post?.authors && post?.authorsCount > 1 && (
        <PostMultipleAuthorsFooter authors={post?.authors} post={post} />
      )}
    </div>
  );
};

export default PostPublishDetails;
