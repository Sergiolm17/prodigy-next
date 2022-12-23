import React from 'react'

import { RevealMain, Slides, Section } from '../../components/Reveal'

import Diapositiva1 from './Diapositiva1'
import Diapositiva2 from './Diapositiva2'
import Diapositiva3 from './Diapositiva3'
import Diapositiva4 from './Diapositiva4'
import Diapositiva5 from './Diapositiva5'

export default function PageHome() {
  return (
    <RevealMain
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '100%'
        // backgroundImage: 'url(https://i.imgur.com/e4aBUbC.jpg)'
      }}
    >
      <Slides>
        <Section id="diapositiva-1">
          <Diapositiva1 />
        </Section>
        <Section id="diapositiva-2">
          <Diapositiva2 />
        </Section>
        <Section id="diapositiva-3">
          <Diapositiva3 />
        </Section>
      </Slides>
    </RevealMain>
  )
}
