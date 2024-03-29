import { useEffect, useState } from "react";
import BlogsList from "../components/BlogsList";
import "../../src/index.css";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("There was an error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDatas();
  }, []);

  return (
    <>
      <h1 className="mb-5 title has-text-centered" >Blog posts</h1>
      {isLoading ? <p>Loading</p> : <BlogsList posts={posts} />}
     
    </>
  );
}

export default HomePage;
