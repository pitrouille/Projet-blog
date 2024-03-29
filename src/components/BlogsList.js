import Blog from "./Blog";

export default function BlogsList({ posts }) {
  return (
    <div className="grid container has-1-cols is-col-min-10 is-gap-1.5 ">
      {posts.map((post) => (
        <Blog key={post.id} post={post} />
      ))}
    </div>
  );
}
