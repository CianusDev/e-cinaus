import React from 'react'
import Section from './Section'

export type TitleBannerProps={
    title:string;
}

const TitleBanner = (props:TitleBannerProps) => {
  return (
    <Section>
        <nav className='w-full flex bg-primary-foreground  h-16 items-center justify-center gap-4'>
            <div className='h-6 w-6 bg-primary rounded-full '/>
            <h2 className=' text-lg font-semibold'>{props.title}</h2>
            <div className='h-6 w-6 bg-primary rounded-full '/>
        </nav>
    </Section>
  )
}

export default TitleBanner