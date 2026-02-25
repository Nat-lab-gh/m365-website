import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Method from './components/Method'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activePost, setActivePost] = useState(null)

  function openPost(slug) {
    setActivePost(slug)
    window.scrollTo({ top: 0 })
  }

  function closePost() {
    setActivePost(null)
  }

  if (activePost) {
    return (
      <>
        <Navbar />
        <main>
          <BlogPost slug={activePost} onClose={closePost} />
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Method />
        <Testimonials />
        <Blog onOpenPost={openPost} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
