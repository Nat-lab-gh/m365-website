function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-brand">M365 Consulting</p>
          <nav className="footer-links">
            <a href="#om-mig">Om mig</a>
            <a href="#tjanster">Tjänster</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Nathalie Törnbrant. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
