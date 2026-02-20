const YEAR = new Date().getFullYear()

export default {
  logo: <strong>PETRA</strong>,
  project: {
    link: 'https://github.com/petra-lol'
  },
  // Tohle by mělo vytvořit menu v horní liště
  navbar: {
    extraContent: (
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="/">Home</a>
        <a href="/about">O mně</a>
        <a href="/projects">Projekty</a>
        <a href="/contact">Kontakt</a>
      </div>
    )
  },
  footer: {
    text: (
      <span>
        {YEAR} © Petra. Všechna práva vyhrazená.
      </span>
    )
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Petra | Portfolio</title>
    </>
  )
}
