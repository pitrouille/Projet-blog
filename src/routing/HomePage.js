import { useEffect, useState } from "react";
import BlogsList from "../components/BlogsList";

function HomePage() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1>Blog posts</h1>
      <BlogsList posts={posts} />
    </>
  );
}

export default HomePage;
