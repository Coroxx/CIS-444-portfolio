import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { springBreakPosts } from '../data.js';

function Blog() {
  return (
    <main>
      <section className="blog-hero">
        <p className="eyebrow">Spring Break 2026</p>
        <h1>California notes from a week away from class</h1>
        <p>
          A short travel blog about taking a break from campus life, exploring Southern
          California, and thinking through the rest of the exchange year.
        </p>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Blog" title="Travel entries">
          Replace the placeholder images with your own photos or videos before submitting the
          GitHub Pages URL.
        </SectionHeading>

        <div className="blog-list">
          {springBreakPosts.map((post) => (
            <article className="blog-post" key={post.title}>
              <img src={post.image} alt={post.alt} />
              <div className="blog-content">
                <p className="eyebrow">{post.date}</p>
                <h2>{post.title}</h2>
                {post.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <Link className="button secondary back-link" to="/">
          Back to portfolio
        </Link>
      </section>
    </main>
  );
}

export default Blog;
