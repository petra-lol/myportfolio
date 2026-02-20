const YEAR = new Date().getFullYear()

export default {
  // 1. Tady nastavíme to horní menu
  navs: [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/about',
      name: 'About Me'
    },
    {
      url: '/projects',
      name: 'Projects'
    },
    {
      url: 'mailto:tvuj@email.cz', // Sem si pak dej svůj mail
      name: 'Kontakt'
    }
  ],

  // 2. Tady je tvoje upravená patička (copyright)
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Petra. Všechna práva vyhrazena.
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),

  // 3. Tohle přidá ten "fancy" nádech - změní barvu prvků na zelenou (hue 150)
  primaryHue: 150,
}
