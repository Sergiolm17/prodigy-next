import { Button } from '@material-ui/core'
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
        <h1>Contactanos</h1>
        <form noValidate autoComplete="off">
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={{
              height: '100%',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}
          >
            Contactar
          </Button>
        </form>
      </section>
    </>
  )
}
