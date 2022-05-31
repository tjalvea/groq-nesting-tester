import PostPublishDetails from "../postsCollection/PostPublishDetails";
import {urlFor} from "../../lib/sanity";

const PostHeader = ({ post }) => {
  return (
    <div>
      <div className="mx-auto max-w-prose px-4 text-lg sm:px-6 lg:px-8">
        <h1>
          <span className="text-gray-900 mt-2 block text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
            {post?.title}
          </span>
        </h1>
        <PostPublishDetails post={post} />
      </div>
      <div className="my-16 mx-auto flex justify-center">
        {post?.image && (
            <img className="w-full sm:px-6 lg:w-2/3"
                 src={urlFor(post?.image)
                     .width(1800)
                     .height(700)
                     .auto('format')
                     .url()}
            />
        )}
      </div>
    </div>
  );
};

export default PostHeader;
