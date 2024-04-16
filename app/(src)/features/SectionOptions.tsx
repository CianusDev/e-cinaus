import { Button } from '@/components/ui/button'
import { Bold } from 'lucide-react'
import React from 'react'
import { ToggleGroupSize } from './ToogleSize'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Color from './Color'

const SectionOptions = () => {
  return (
    <section className='flex basis-1/4 h-52 flex-col items-start bg-muted-primary rounded-lg p-4 '>
      <h1 className='font-semibold text-lg'>Sizes</h1>
      <Separator className='my-2'/>
      <div className='flex items-center gap-4 py-4 flex-wrap'>
        <Button>Small</Button>
        <Button>Meduim</Button>
        <Button>Large</Button>
      </div>
      <h1 className='font-semibold text-lg'>Colors</h1>
      <Separator className='my-2'/>
      <div className='flex items-center gap-4 py-4 flex-wrap'>
        <Button>red</Button>
        <Button>blue</Button>
        <Button>purple</Button>
      </div>
    </section>
  )
}

export default SectionOptions