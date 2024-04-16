/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Section from './Section'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <Section className='h-[26rem]'>
        <div className='w-full relative  h-full flex items-center rounded-xl  justify-center'>
            <div className='absolute  h-full w-full rounded-xl bg-black/30'/>
            <img src="https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg" alt="bg-hero" className='h-full w-full rounded-xl object-cover' />
            <div className=' text-background absolute z-30 m-auto px-16 text-center '>
                <h1 className='font-semibold text-lg'>Lorem</h1>
                <h2> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus architecto excepturi sequi repudiandae exercitationem dolor quaerat in ipsum soluta, nostrum tenetur dolorum autem! Asperiores, delectus in vel esse atque nemo.</h2>
                <Button className='my-2'>
                    button d'action
                </Button>
            </div>
        </div>
    </Section>
  )
}

export default Hero