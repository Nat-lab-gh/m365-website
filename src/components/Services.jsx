const services = [
  {
    image: '/strategy.jpg',
    title: 'Rådgivning & Strategi',
    description: 'Vi tar fram konkreta mål och en tydlig plan för din verksamhet.',
  },
  {
    image: '/implementation.jpg',
    title: 'Implementation',
    description: 'Jag levererar dina önskemål för att ni ska uppnå en maximal framgång.',
  },
  {
    image: '/adoption.jpg',
    title: 'Adoption & Förändringsledning',
    description: 'Få verkligt värde genom smarta metoder där jag skapar engagemang och nya arbetssätt.',
  },
  {
    image: '/workshop.jpg',
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
            <div className="card card-with-image" key={service.title}>
              <img src={service.image} alt={service.title} className="card-image" />
              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
