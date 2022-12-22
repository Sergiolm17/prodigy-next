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
        <h1>Integración con Facebook Pixel</h1>
      </section>
      <section>
        <h2>Cómo instalar Prodigy en tu sitio web</h2>
        <p>
          Para instalar Prodigy en tu sitio web, solo tienes que agregar el código de Segmenly al
          encabezado de tu sitio.
        </p>
      </section>
      <section>
        <h2> Cómo sincronizar Prodigy con Facebook Pixel</h2>
        <p>
          Una vez que hayas instalado Prodigy en tu sitio web, podrás sincronizarlo con Facebook
          Pixel para rastrear las acciones de los usuarios en tu sitio y obtener una segmentación
          más precisa y detallada para tus anuncios en Facebook.
        </p>
      </section>
    </>
  )
}
