/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import React from 'react'
export type ArticleImage= {
    url?:string;
    reduction?:number|null;
}
const ArticleImage = (props:ArticleImage) => {
  return (
    <div className='flex-1 flex items-center justify-center border relative rounded-xl'>
        <img src={props.url} height={100} alt="article image" className=' object-cover rounded-xl  '  />
        {props.reduction && <Button size={'icon'} className='absolute top-2 right-2 text-xs font-semibold rounded-full z-40'>
            - {props?.reduction}%
          </Button>}
    </div>
  )
}

export default ArticleImage