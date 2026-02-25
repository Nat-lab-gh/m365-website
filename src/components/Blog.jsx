import blogPosts from '../blogData'

function Blog({ onOpenPost }) {
  return (
    <section id="blogg" className="blog">
      <div className="container">
        <h2>Blogg</h2>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article
              className="blog-card"
              key={post.slug}
              onClick={() => onOpenPost(post.slug)}
            >
              <span className="blog-card-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <span className="blog-card-date">{post.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
