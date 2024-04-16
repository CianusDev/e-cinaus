import { cn } from '@/lib/utils';
import React from 'react'
export type ColorType = {
    color : string;
    onClick?: ()=> void;
}
const Color = (props:ColorType) => {
  return (
    <div className={cn('rounded-full h-8 w-8 cursor-pointer',props.color)}/>
  )
}

export default Color