import React from 'react'
import { Article } from './Article'
import Section from './Section';
import { articles } from '@/lib/CONSTANTS';


const GridCard = () => {
  return (
    <div className='w-full flex justify-center'>
    <section className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((a,i)=>(
            <Article key={i} name={a.name} description={a.description} url={a.url} price={a.price} size={a.size} color={a.color} id={a.id} reduction={a.reduction} />
        ))}
    </section>
    </div>
  )
}

export default GridCard