"use client";
import React from 'react'
import useCartStore from '../store/cartStore'
import CartCard from './CartCard'

const Page = () => {
  const {productsCart} = useCartStore()
  return (
    <div className='w-screen min-h-[100vh] pt-[10vh] border border-black'>
      <h1 className='font-bold text-2xl title'>Carrito</h1>
      {productsCart.map((product,index)=>{
        return(
          <CartCard/>
        )
      })}
    </div>
  )
}

export default Page