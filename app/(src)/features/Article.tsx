/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export type ArticleProps={
    id:number;
    name:string;
    description:string;
    url:string;
    price:number;
    size:string;
    color:string;
    reduction:number|null;
}

export const Article = (props:ArticleProps) => {
  return (
    <Link href={`/articles/${props.id}`} className='hover:shadow-xl hover:scale-105 transition-transform ease-in-out rounded-xl'>
    <Card className="w-full max-w-sm mx-auto rounded-xl ">
      <CardContent className="p-0">
        <div className=" aspect-card rounded-xl relative">
          <img
            alt="Article"
            className=" w-full rounded-t-xl object-cover"
        src={props.url}
          />
          {props.reduction && <Button size={'icon'} className='absolute top-2 right-2 text-xs font-semibold rounded-full z-40'>
            - {props.reduction}%
          </Button>}
        </div>
        <div className="p-4 max-sm:flex max-sm:flex-col flex-wrap ">
          <h3 className="text-lg font-semibold py-1">Vintage Camera</h3>
          <p className="text-sm text-gray-500 py-1">Instant Classic</p>
          <div className="flex items-center justify-between">
            <span className="font-meduim">$249</span>
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  )
}
