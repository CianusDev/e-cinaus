import React from 'react'
import Section from './Section'
import SectionOptions from './SectionOptions'
import ContainerArticles from './ContainerArticles'

const SectionArticles = () => {
  return (
    <section className='flex items-center gap-2 '>
        <SectionOptions/>
        <ContainerArticles/>
    </section>
  )
}

export default SectionArticles