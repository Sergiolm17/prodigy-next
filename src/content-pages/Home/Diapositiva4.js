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
        <h1>Ventajas de utilizar Prodigy</h1>
        <p>
          Al utilizar Prodigy, podrás acceder a una amplia gama de datos sobre el comportamiento de
          los usuarios en tu sitio, lo que te permitirá segmentar aún más tu audiencia y mostrar
          anuncios más relevantes y efectivos. Además, Prodigy se integra con otras plataformas de
          publicidad pagada, lo que te permite utilizar la información de seguimiento de usuarios en
          todas tus campañas publicitarias.
        </p>
      </section>

      <section>
        <h1>Cómo Prodigy puede mejorar la efectividad de tu publicidad pagada</h1>
        <p>
          Prodigy te ayuda a obtener una segmentación más precisa y detallada para tus anuncios, lo
          que puede mejorar la efectividad de tu publicidad pagada al mostrar anuncios más
          relevantes a tu audiencia. Además, al utilizar Prodigy en conjunción con otras plataformas
          de publicidad pagada, podrás obtener una visión más completa y detallada de cómo tus
          anuncios están funcionando en todas las plataformas.
        </p>
      </section>
    </>
  )
}
