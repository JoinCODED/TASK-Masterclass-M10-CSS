import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import { useGetPosts } from "./services";

const App = () => {
  const postQuery = useGetPosts();

  if (postQuery.error) {
    return (
      <>
        <h1>Error!</h1>
        <code>{JSON.stringify(postQuery.error)}</code>
      </>
    );
  }

  if (postQuery.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />
      <PostList posts={postQuery.data} />
    </>
  );
};

export default App;
