import blogPosts from '../blogData'

function renderBlock(block, i) {
  switch (block.type) {
    case 'p':
      return <p key={i}>{block.text}</p>
    case 'h3':
      return <h3 key={i}>{block.text}</h3>
    case 'quote':
      return <blockquote key={i}>{block.text}</blockquote>
    case 'ul':
      return (
        <ul key={i}>
          {block.items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      )
    case 'dl':
      return (
        <dl key={i} className="blog-dl">
          {block.items.map((item, j) => (
            <div key={j} className="blog-dl-item">
              <dt>{item.term}</dt>
              <dd>{item.def}</dd>
            </div>
          ))}
        </dl>
      )
    default:
      return null
  }
}

function BlogPost({ slug, onClose }) {
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return null

  return (
    <div className="blog-post-overlay">
      <article className="blog-post">
        <button className="blog-post-back" onClick={onClose}>
          ← Tillbaka
        </button>
        <span className="blog-card-category">{post.category}</span>
        <h1>{post.title}</h1>
        <time className="blog-post-date">{post.date}</time>
        <div className="blog-post-body">
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>
      </article>
    </div>
  )
}

export default BlogPost
