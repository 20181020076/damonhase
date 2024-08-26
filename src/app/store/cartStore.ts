import { create } from "zustand";

export interface cartProductModel {
  productId: string;
  primaryColor: string;
  secondaryColor: string | undefined;
  quantity: number;
}
interface CartState {
  productsCart: cartProductModel[];
  add: (product: cartProductModel) => void;
  remove: (productId: string) => void;
  getProducts: (productId: string[]) => void;
  buy: (by: number) => void;
}

const useCartStore = create<CartState>((set,get) => ({
  productsCart: [{productId:"1",primaryColor:"red",secondaryColor:undefined,quantity:5},{productId:"2",primaryColor:"blue",secondaryColor:"green",quantity:2}],
  add: (product) =>
    set((state) => ({
      productsCart: [...state.productsCart, product],
    })),

  remove: (productId) =>
    set((state) => ({
      productsCart: state.productsCart.filter(
        (product) => product.productId !== productId
      ),
    })),
  getProducts: async()=>{
   
      const { productsCart } = get();
      const productsCartIs = productsCart.map((productCart)=>{
          return productCart.productId
      })
      await fetch(`/api/cart?productIds=${productsCartIs}`).then((res)=>{
          console.log(res)
          console.log(productsCartIs)

      })


  },

  buy: () =>
    set(() => ({
      productsCart: [],
    })),
}));
export default useCartStore;
