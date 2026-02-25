import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#hem', label: 'Hem' },
    { href: '#om-mig', label: 'Om mig' },
    { href: '#tjanster', label: 'Tjänster' },
    { href: '#min-metod', label: 'Min metod' },
    { href: '#omdomen', label: 'Omdömen' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hem" className="navbar-logo">M365 Consulting</a>
        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Öppna meny"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
