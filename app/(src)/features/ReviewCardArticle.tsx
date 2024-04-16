/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ArticleProps } from './Article'

const ReviewCardArticle = (props:ArticleProps) => {
  return (
    <div className='flex p-2 shadow'>
        <img src={props.url} alt={props.name} height={60} width={60} />
    </div>
  )
}

export default ReviewCardArticle