"use server"
import { articles } from "@/lib/CONSTANTS"

export const articleById = async (id:any) =>{
    const myArticle = articles.filter((a)=>a.id==id);
    return myArticle[0]
}