import React, { useCallback } from 'react'
import { useRevealDeck } from '../../components/Reveal'

export default function Diapositiva2() {
  const [Deck, { progress }] = useRevealDeck()

  const handleClick = useCallback(() => {
    if (Deck) Deck.right()
  }, [Deck])
  return (
    <>
      <section>
        <h1>Ventajas</h1>
        <ul>
          <li>Accede a datos detallados sobre el comportamiento de los usuarios en tu sitio.</li>
          <li>Segmenta aún más tu audiencia para mostrar anuncios más relevantes.</li>
          <li>Integración con Facebook Ads y otras plataformas de publicidad pagada.</li>
        </ul>
      </section>
      <section>
        <h2>Cómo instalar Prodigy en tu sitio web</h2>
        <p>
          Para instalar Prodigy en tu sitio web, solo tienes que agregar una línea de código en el
          encabezado de tu sitio.
        </p>
        <pre>
          <code data-trim data-noescape>
            {"<link href='https://prodigy.wararlabs.com/?id=V3FSDFJUI4'/>"}
          </code>
        </pre>
      </section>
    </>
  )
}
