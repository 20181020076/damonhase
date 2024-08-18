import {create} from "zustand";
import cartProductModel from "../types/models/cartModel";

interface CartState{
    products:cartProductModel[],
    adding:(productCart: cartProductModel) => void,
    removing:(by:number) => void
}

const useCartStore = create<CartState>((set)=>({
    products : [],
    adding: (productCart) => set((state)=>({
        products:[...state.products,productCart]
    })),
    removing: (by) => set((state)=>({

    }))

}))

