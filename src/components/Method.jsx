const promises = [
  {
    icon: '✅',
    title: 'Erfaren specialist',
    description: 'Djup kunskap inom Microsoft 365, AI och user adoption med bevisade resultat.',
  },
  {
    icon: '📈',
    title: 'Resultatinriktad strategi',
    description: 'Konkreta mål och mätbara resultat som driver verklig affärsnytta.',
  },
  {
    icon: '💡',
    title: 'Personligt engagemang',
    description: 'Jag bryr mig om era utmaningar och arbetar nära er för bästa resultat.',
  },
]

function Method() {
  return (
    <section id="min-metod" className="method">
      <div className="container">
        <h2>Trygg, tydlig & anpassad</h2>
        <p className="method-intro">
          Jag skräddarsyr varje strategi utifrån er organisations unika behov.
          Genom strukturerade metoder och kreativ problemlösning levereras
          konkreta resultat med flexibilitet för förändringar.
        </p>
        <div className="card-grid">
          {promises.map(promise => (
            <div className="card" key={promise.title}>
              <span className="card-icon">{promise.icon}</span>
              <h3>{promise.title}</h3>
              <p>{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Method
