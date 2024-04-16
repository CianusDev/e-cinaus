/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { articleById } from '@/actions/server-action';
import React, { useEffect, useState } from 'react'
import { ArticleProps } from '../../features/Article';
import SectionArticleDetail from '../../features/SectionArticleDetail';
import { Separator } from '@/components/ui/separator';
import TitleBanner from '../../features/TitleBanner';
import GridCard from '../../features/GridCard';

const page = ({ params }: { params: { arcticleId: string } }) => {
    const [article,setArticle] = useState<ArticleProps>();

    useEffect(()=>{
        const ID = params.arcticleId;
        const recupererArticle = async ()=>{
            await articleById(ID).then((a)=>{
                setArticle(a)
            })
        }
        recupererArticle()
    },[params.arcticleId]);

  return article ? (
    <main>
        <SectionArticleDetail article={article}/>
        <Separator/>
        <TitleBanner title='related items'/>
        <GridCard/>
    </main>
  ) : ('loading')
}

export default page