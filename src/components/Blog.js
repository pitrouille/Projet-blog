import { Link } from "react-router-dom";

export default function Blog({ post }) {
  return (
    <Link  to={`/${post.id}`} key={post.id}>
      <div className="cell box has-background-grey-light has-text-black mb-5" id="home">{post.id} {post.title}</div>
    </Link>
  );
}
