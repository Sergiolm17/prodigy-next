import React, { useCallback } from 'react'
import { useRevealDeck } from '../../components/Reveal'
import Image from 'next/image'

export default function First() {
  const [Deck, { progress }] = useRevealDeck()

  const handleClick = useCallback(() => {
    if (Deck) Deck.right()
  }, [Deck])
  return (
    <>
      <section>
        <div>
          <h1>Prodigy</h1>
        </div>
        <div>
          <Image
            src="https://i.imgur.com/7CW2Saf.png"
            alt="Picture of the author"
            width={500}
            height={500}
          ></Image>
        </div>
      </section>
      <section>
        <h2>¿Qué es Prodigy?</h2>
        <p>
          Prodigy es una herramienta de seguimiento de usuarios para sitios web que te ayuda a
          obtener una segmentación más precisa y detallada para tus anuncios en Facebook y otras
          plataformas de publicidad pagada.
        </p>
      </section>
      <section>
        <h2>¿Cómo funciona Prodigy?</h2>
        <p>
          Prodigy funciona enviando los datos del comportamiento de los usuarios en tu sitio web a
          un servidor central. Una vez allí, la información se ordena y procesa para luego ser
          reenviada a la plataforma de publicidad correspondiente.
        </p>
      </section>
    </>
  )
}
