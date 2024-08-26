"use client";
import React, { useEffect } from 'react'
import useCartStore, { cartProductModel } from '../store/cartStore'
import CartCard from './CartCard'

const Page = () => {
  const {productsCart,getProducts} = useCartStore()
  

  useEffect(()=>{

  },[])


  return (
    <div className='w-screen min-h-[100vh] pt-[10vh] border border-black'>
      <h1 className='font-bold text-2xl title'>Carrito</h1>
      {productsCart.map((product:cartProductModel,index)=>{
        return(
          <div className='w-full' key={index}>
            <CartCard product={product}/>

          </div>
        )
      })}
    </div>
  )
}

export default Page