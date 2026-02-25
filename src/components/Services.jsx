const services = [
  {
    icon: '🎯',
    title: 'Rådgivning & Strategi',
    description: 'Vi tar fram konkreta mål och en tydlig plan för din verksamhet.',
  },
  {
    icon: '🚀',
    title: 'Implementation',
    description: 'Jag levererar dina önskemål för att ni ska uppnå en maximal framgång.',
  },
  {
    icon: '🤝',
    title: 'Adoption & Förändringsledning',
    description: 'Få verkligt värde genom smarta metoder där jag skapar engagemang och nya arbetssätt.',
  },
  {
    icon: '📚',
    title: 'Workshops & Utbildningar',
    description: 'Få skräddarsydda workshops och utbildningar för att uppnå önskade resultat.',
  },
]

function Services() {
  return (
    <section id="tjanster" className="services">
      <div className="container">
        <h2>Tjänster</h2>
        <div className="card-grid">
          {services.map(service => (
            <div className="card" key={service.title}>
              <span className="card-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
