import PostAuthorOneImage from "./PostAuthorOneImage";
import PostAuthorOneName from "./PostAuthorOneName";
import PostPublishDetailsTime from "./PostPublishDetailsTime";

const PostOneAuthor = ({ author, post }) => {
  return (
    <div className="mt-6 flex items-center">
      <PostAuthorOneImage author={author} />
      <div>
        <PostAuthorOneName author={author} post={post} />
        <PostPublishDetailsTime post={post} />
      </div>
    </div>
  );
};

export default PostOneAuthor;
