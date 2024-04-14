/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react'

export type ArticleProps={
    name:string;
    description:string;
    url:string;
    price:number;
    size:string;
    color:string;
}

export const Article = (props:ArticleProps) => {
  return (
    <Link href={''} className='hover:shadow-xl'>
    <Card className="w-full max-w-sm mx-auto ">
      <CardContent className="p-0">
        <div className=" aspect-card rounded-lg">
          <img
            alt="Article"
            className=" w-full rounded-t-lg object-cover"
        src={props.url}
          />
        </div>
        <div className="p-4 max-sm:flex max-sm:flex-col flex-wrap">
          <h3 className="text-lg font-medium">Vintage Camera</h3>
          <p className="text-sm text-gray-500">Instant Classic</p>
          <div className="flex items-center justify-between">
            <span className="font-medium">$249</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  )
}
