import React, { useCallback } from 'react'
import { useRevealDeck } from '../../components/Reveal'

export default function Diapositiva3() {
  const [Deck, { progress }] = useRevealDeck()

  const handleClick = useCallback(() => {
    if (Deck) Deck.right()
  }, [Deck])
  return (
    <>
      <section>Hello There OK</section>

      <section data-markdown style={{ height: '100vh' }}>
        <div
          // data-template
          style={{ overflowY: 'auto', width: '100%', height: '100%' }}
        >
          reveal.js da sd enables you to create beautiful interactive slide decks using HTML. This
          presentation will show you examples of what it can do. reveal.js enables you to create
          beautiful interactive slide decks using HTML. This presentation will show you examples of
          what it can do. reveal.js enables you to create beautiful interactive slide decks using
          HTML.
        </div>
      </section>
    </>
  )
}
