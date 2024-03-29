import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <ul>
        {posts.map((post) => (
          <Link to={`/${post.id}`} key={post.id}>
            <li>
              {post.title} description: {post.body}
            </li>
          </Link>
        ))}
      </ul>
      Click
    </>
  );
}

export default HomePage;
