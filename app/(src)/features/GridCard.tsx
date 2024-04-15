import React from 'react'
import { Article, ArticleProps } from './Article'
import Section from './Section';

const articles: ArticleProps[] = [
    {
        id:1,
        name: "Chemise en coton",
        description: "Chemise confortable en coton avec un design classique.",
        url: "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 29.99,
        size: "M",
        color: "Blanc",
        reduction:null,
    },
    {
        id:2,
        name: "Sacoche en cuir",
        description: "Sacoche élégante en cuir véritable avec plusieurs compartiments.",
        url: "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 79.99,
        size: "Unique",
        color: "Noir",
        reduction:23,
    },
    {
        id:3,
        name: "Montre-bracelet analogique",
        description: "Montre-bracelet élégante avec un cadran analogique et un bracelet en acier inoxydable.",
        url: "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 49.99,
        size: "Unique",
        color: "Argent",
        reduction:null,
    },
    {
        id:4,
        name: "Chemise en coton",
        description: "Chemise confortable en coton avec un design classique.",
        url: "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 29.99,
        size: "M",
        color: "Blanc",
        reduction:50,
    },
    {
        id:6,
        name: "Sacoche en cuir",
        description: "Sacoche élégante en cuir véritable avec plusieurs compartiments.",
        url: "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 79.99,
        size: "Unique",
        color: "Noir",
        reduction:null,
    },
    {
        id:7,
        name: "Montre-bracelet analogique",
        description: "Montre-bracelet élégante avec un cadran analogique et un bracelet en acier inoxydable.",
        url: "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 49.99,
        size: "Unique",
        color: "Argent",
        reduction:null,
    },
    // Ajoutez ici d'autres éléments selon vos besoins
];



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