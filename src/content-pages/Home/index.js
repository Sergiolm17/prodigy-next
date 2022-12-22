import React from 'react'

import { RevealMain, Slides, Section } from '../../components/Reveal'

import Diapositiva1 from './Diapositiva1'
import Diapositiva2 from './Diapositiva2'
import Diapositiva3 from './Diapositiva3'
import Diapositiva4 from './Diapositiva4'
import Diapositiva5 from './Diapositiva5'

export default function PageHome() {
  return (
    <RevealMain>
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
        <Section id="diapositiva-4">
          <Diapositiva4 />
        </Section>
        <Section id="diapositiva-5">
          <Diapositiva5 />
        </Section>
      </Slides>
    </RevealMain>
  )
}
