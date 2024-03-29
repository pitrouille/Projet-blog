import Blog from "./Blog";

export default function BlogsList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <Blog post={post} />
      ))}
    </ul>
  );
}
