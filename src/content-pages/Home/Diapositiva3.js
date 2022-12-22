import React, { useCallback } from 'react'
import { useRevealDeck } from '../../components/Reveal'

export default function Diapositiva3() {
  const [Deck, { progress }] = useRevealDeck()

  const handleClick = useCallback(() => {
    if (Deck) Deck.right()
  }, [Deck])
  return (
    <>
      <section>
        <h1>Datos sobre el comportamiento de los usuarios</h1>
      </section>

      <section data-auto-animate>
        <h3>Qué páginas visitan los usuarios</h3>
        <p>
          Con Prodigy, podrás acceder a información sobre qué páginas visitan los usuarios en tu
          sitio.
        </p>
      </section>
      <section data-auto-animate>
        <h3 style={{ fontSize: '42px' }}>Qué páginas visitan los usuarios</h3>
        <h3>Qué productos o servicios buscan los usuarios</h3>
        <p>También podrás ver qué productos o servicios buscan los usuarios en tu sitio.</p>
      </section>
      <section data-auto-animate>
        <h3 style={{ fontSize: '42px' }}>Qué páginas visitan los usuarios</h3>
        <h3 style={{ fontSize: '42px' }}>Qué productos o servicios buscan los usuarios</h3>
        <h3>Cuánto tiempo pasan los usuarios en tu sitio</h3>
        <p>
          También podrás ver qué productos o servicios buscan los usuarios en tu sitio y la tasa de
          rebote.
        </p>
      </section>
    </>
  )
}
