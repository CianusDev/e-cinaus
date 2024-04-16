import React from 'react'
import { SectionArticleDetailProps } from './SectionArticleDetail'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/lib/store.cart'

const ArticleDetails = (props:SectionArticleDetailProps) => {
const {cart ,setCart } = useCartStore();
return (
    <section className=' h-full flex-1 flex flex-col p-4 gap-4'>
        <h1 className='font-bold text-3xl'>{props.article.name}</h1>
        <h2 className='font-bold text-2xl'>${props.article.price}</h2>
        <Separator/>
        <h2 className='font-medium text-muted-foreground text-lg'>{props.article.description}</h2>
        <div className='flex gap-2 items-center'>
            <h1 className='font-semibold text-xl'>size: </h1>
            <h2 className='font-medium text-muted-foreground text-xl'>{props.article.size}</h2>
        </div>
        <div className='flex gap-2 items-center'>
            <h1 className='font-semibold text-xl'>color: </h1>
            <h2 className='font-medium text-muted-foreground text-xl'>{props.article.color}</h2>
        </div>
        <div className='flex flex-col items-end'>
            <Button className='flex gap-2'
            onClick={()=>{
                if(cart.includes(props.article.id)){
                    setCart(cart.filter((a)=>a!==props.article.id))
                }else{
                    setCart([...cart,props.article.id])
                }
            }}
            >
                add cart
                <ShoppingCart size={20}/>                
            </Button>
        </div>
    </section>
  )
}

export default ArticleDetails