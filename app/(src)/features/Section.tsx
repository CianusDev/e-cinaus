import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

const Section = (props:PropsWithChildren<{className?:string}>) => {
  return (
    <section className={cn(props.className,'w-full p-4 m-auto')}>
        {props.children}
    </section>
  )
}

export default Section