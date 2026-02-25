const testimonials = [
  {
    name: 'Peter Cucarano',
    role: 'Regionschef, MPYA Finance',
    quote: 'Nathalie har en unik förmåga att snabbt sätta sig in i verksamheten, förstå behov och omsätta det i lösningar som gör verklig skillnad.',
  },
  {
    name: 'Johan Sandström',
    role: 'VD, Hedera Group AB',
    quote: 'Nathalie är driven, påvisade hög kompetens och var lätt att samarbeta med, positiv och lösningsorienterad.',
  },
  {
    name: 'Svante Jernberg',
    role: 'Fastighetsutvecklare',
    quote: 'Med lyhördhet tog hon tag i våra problem och löste dem. Vi kan starkt rekommendera Nathalie.',
  },
]

function Testimonials() {
  return (
    <section id="omdomen" className="testimonials">
      <div className="container">
        <h2>Omdömen</h2>
        <div className="card-grid">
          {testimonials.map(t => (
            <div className="card testimonial-card" key={t.name}>
              <blockquote>"{t.quote}"</blockquote>
              <p className="testimonial-name">{t.name}</p>
              <p className="testimonial-role">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
