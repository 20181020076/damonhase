"use client";
import productModel from '@/app/types/models/productModel';
import React, {useEffect, useState} from 'react'

const page = ({params}:{params:{id:number}}) => {
  const [product,setProduct] = useState<productModel>();

  const getProduct = async()=>{

    const productFormat: productModel = {
      id:"",
      name:"mascara 1",
      description:"",
      stock:5,
      image:"",
      color:""
    }
    setProduct(productFormat)
    const response = await fetch("",{

    })
  
  }

  useEffect(()=>{
    getProduct()
  },[])

  return (
    <div className='pt-[10vh] w-screen min-h-screen'>
      {product?<img src={product.image} alt="" />:<></>}
      <h1>{product?.name}</h1>
    </div>
  )
}

export default page