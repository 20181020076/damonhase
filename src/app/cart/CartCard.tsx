"use client";
import React, { useEffect } from 'react'
import useCartStore from '../store/cartStore';

const CartCard = () => {
    const {buy, productsCart, remove} = useCartStore()

    const handleData = async() =>{
        const productsCartIs = productsCart.map((productCart)=>{
            return productCart.productId
        })
        await fetch("/api/cart").then((res)=>{
            console.log(res)
            console.log(productsCartIs)

        })
    }

    useEffect(()=>{
        handleData()
    },[])
  return (
    <div className='w-full h-[15vh] bg-white'>CartCard</div>
  )
}

export default CartCard