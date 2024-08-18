import Link from 'next/link'
import React from 'react'

const PopUp = ({isActive, setIsActive}:{isActive:boolean,setIsActive:Function}) => {
  return (
    
        <div
          className={`absolute top-0 left-0 w-screen h-screen  ${
            !isActive ? "-translate-x-[100vw]" : "translate-x-0"
          }`}
        >
          <div className="relative w-screen h-screen">
            <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-60 z-40"></div>
            <div
              onClick={() => setIsActive(isActive == !isActive)}
              className="absolute  top-[6.5vh] right-6 bg-white z-50"
            >
              cerrar
            </div>
            <div className="flex flex-col absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-[90vw] h-[75vh] bg-[#111318] z-50 border-2 border-white text-white">
              <Link href={"/"}>Home</Link>
              <Link href={"/products"}>Productos</Link>
              <Link href={"/profile"}>Profile</Link>
              <Link href={"/cart"}>Carrito</Link>

            </div>
          </div>
    </div>
  )
}

export default PopUp