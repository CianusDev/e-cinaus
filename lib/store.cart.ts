import { create } from 'zustand';

type CartStoreType = {
    cart : number[],
    setCart : (cart : number[]) => void
}

export const useCartStore = create<CartStoreType>((set)=>({
    cart:[],
    setCart : (cart) => set({ cart }),
}))