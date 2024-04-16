import React from 'react'
import ArticleImage from './ArticleImage'
import { ArticleProps } from './Article'
import ArticleDetails from './ArticleDetails'
export type SectionArticleDetailProps = {
    article: ArticleProps
 }

const SectionArticleDetail = (props:SectionArticleDetailProps) => {
  return (
    <section className='flex gap-2 p-4 max-lg:flex-col'>
        <ArticleImage reduction={props.article!.reduction} url={props.article!.url}/>
        <ArticleDetails article={props.article}/>
    </section>
  )
}

export default SectionArticleDetail