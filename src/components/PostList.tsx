import { Post as PostModel } from "../models";
import Post from "./Post";

type PostListProps = {
  posts: PostModel[];
};

const PostList = (props: PostListProps) => {
  const posts = props.posts.map((post) => <Post key={post.id} post={post} />);

  return (
    <main>
      <article>
        <h1>Posts</h1>
        <section>{posts}</section>
      </article>
    </main>
  );
};

export default PostList;
