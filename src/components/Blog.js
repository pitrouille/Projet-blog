import { Link } from "react-router-dom";

export default function Blog({ post }) {
  return (
    <Link to={`/${post.id}`} key={post.id}>
      <li>{post.title}</li>
    </Link>
  );
}
