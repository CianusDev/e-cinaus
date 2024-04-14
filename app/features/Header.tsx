'use client'
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ShoppingBag, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'


const Header = () => {
    const pathname=usePathname();
  return (
    <header className='flex w-full sticky top-0 shadow-sm z-50 bg-white px-6 h-16 items-center justify-between'>
      <Link href={"/"} className=' font-bold text-xl flex items-center '>
        {/* <Image src={'/sitor_logo.png'} height={50} width={50} alt='logo'/> */}
        <h1>E-CIANUS</h1>
      </Link>
      <div className=' gap-4 items-center w-auto flex  '>
        <Link href={'#'} className={cn(buttonVariants({variant:"default",}),'relative rounded-3xl flex items-center gap-1')}>
          <ShoppingBag/>
          <div className='h-4 w-4 rounded-full flex items-center justify-center'>0</div>
        </Link>
        <Link href={'#'} className={cn(buttonVariants({variant:"ghost"}),'relative border')}>
         Explore
        </Link>
        <Link href={'/login'} className={cn(buttonVariants({variant:"outline"}),"text-primary hover:text-primary font-semibold")}>
          Sign up
        </Link>
       
      </div>
    </header>
  )
}

export default Header