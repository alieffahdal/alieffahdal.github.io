import { Link, Navigate, useParams } from "react-router-dom";
import { getPost } from "../data/blog";
import SplitLayout from "../components/SplitLayout";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <SplitLayout image={post.cover} imageAlt={post.title}>
      <div className="card split-intro">
        <Link to="/blog" className="text-link">
          ← All Posts
        </Link>
        <h1>{post.title}</h1>
      </div>
      <div className="card about-body">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </SplitLayout>
  );
}
