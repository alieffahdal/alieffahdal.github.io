import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog";
import SplitLayout from "../components/SplitLayout";

export default function Blog() {
  const featured = blogPosts[0];

  return (
    <SplitLayout image={featured.cover} imageAlt={featured.title}>
      <div className="card split-intro">
        <h1>Blog</h1>
        <p>
          Notes from the road and from home — thoughts on photography, travel, and whatever
          else is worth writing down.
        </p>
      </div>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-row">
            {post.isNew && <span className="badge">New</span>}
            <span className="blog-row-title">{post.title}</span>
            <span className="text-link">Read</span>
          </Link>
        ))}
      </div>
    </SplitLayout>
  );
}
