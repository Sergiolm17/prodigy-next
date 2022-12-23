import { Button, TextField } from '@material-ui/core'
import React, { useCallback } from 'react'
import { useRevealDeck } from '../../components/Reveal'

export default function Diapositiva3() {
  const [Deck, { progress }] = useRevealDeck()

  const handleClick = useCallback(() => {
    if (Deck) Deck.right()
  }, [Deck])
  return (
    <>
      <section data-auto-animate>
        <h3>Ofrezca experiencias unificadas personalizadas</h3>
        <p>
          Cree y active campañas personalizadas basadas en datos en todos los canales de clientes
          desde una plataforma centralizada.
        </p>
      </section>
    </>
  )
}
