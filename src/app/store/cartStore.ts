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
  buy: (by: number) => void;
}

const useCartStore = create<CartState>((set) => ({
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

  buy: () =>
    set(() => ({
      productsCart: [],
    })),
}));
export default useCartStore;
