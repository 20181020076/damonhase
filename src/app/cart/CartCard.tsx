"use client";
import React, { useEffect } from 'react'
import useCartStore, { cartProductModel } from '../store/cartStore';

const CartCard = ({product}:{product:cartProductModel}) => {
    const {buy, productsCart, remove} = useCartStore()

    
  return (
    <div className='w-full h-[15vh] bg-white'>
        <h1>{product.productId}</h1>
    </div>
  )
}

export default CartCard