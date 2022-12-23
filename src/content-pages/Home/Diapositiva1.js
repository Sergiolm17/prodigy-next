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
          <Image
            src="https://i.imgur.com/7CW2Saf.png"
            alt="Picture of the author"
            width={300}
            height={300}
          ></Image>
        </div>
        <div>
          <h1>Prodigy</h1>
          <p>Personalice cada interacción</p>
        </div>
      </section>
      <section>
        <h2>Obten una visión completa del cliente</h2>
        <ul>
          <li>
            Unifique los puntos de contacto de sus clientes en todas las plataformas y canales.
          </li>
          <li>Comprenda el recorrido del cliente.</li>
        </ul>
      </section>
    </>
  )
}
