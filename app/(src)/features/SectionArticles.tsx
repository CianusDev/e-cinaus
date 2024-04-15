import React from 'react'
import Section from './Section'
import SectionOptions from './SectionOptions'
import ContainerArticles from './ContainerArticles'

const SectionArticles = () => {
  return (
    <Section className='flex items-center flex-wrap'>
        <SectionOptions/>
        <ContainerArticles/>
    </Section>
  )
}

export default SectionArticles