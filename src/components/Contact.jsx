function Contact() {
  return (
    <section id="kontakt" className="contact">
      <div className="container">
        <h2>Kontakta mig</h2>
        <p className="contact-intro">
          Vill du veta mer om hur jag kan hjälpa din organisation? Hör av dig!
        </p>
        <div className="contact-grid">
          <a href="tel:+46739973859" className="contact-item">
            <span className="contact-icon">📞</span>
            <span>073-997 38 59</span>
          </a>
          <a href="mailto:nathalie.tornbrant@m365consulting.se" className="contact-item">
            <span className="contact-icon">✉️</span>
            <span>nathalie.tornbrant@m365consulting.se</span>
          </a>
          <a
            href="https://linkedin.com/in/nathalie-törnbrant/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">💼</span>
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="contact-cta">
          <a href="mailto:nathalie.tornbrant@m365consulting.se" className="btn btn-primary">
            Skicka e-post
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
