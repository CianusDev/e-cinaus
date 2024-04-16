import { articles } from '@/lib/CONSTANTS'
import React from 'react'
import ReviewCardArticle from './ReviewCardArticle'

const SectionReviewArticle = () => {
  return (
    <section className='flex flex-col'>
        {articles.map((a,i)=>(
            <ReviewCardArticle key={i} name={a.name} description={a.description} url={a.url} price={a.price} size={a.size} color={a.color} id={a.id} reduction={a.reduction} />
        ))}
    </section>
  )
}

export default SectionReviewArticle