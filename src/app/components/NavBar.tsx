"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BurgerButton, CartIcon, LogoIcon, ProfileIcon } from "./Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);
  const [changeState, setChangeState] = useState(0)


  useEffect(() => {
    
    setHeight(window.innerHeight)
    setChangeState(height*65/100)
    const handleScroll = () => {

      setScroll(window.scrollY)
      
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div className="fixed w-full z-50">
      <div
        className={` flex px-3 justify-between items-center w-full h-[10vh]  ${pathName==="/"?(scroll>changeState ? "bg-bone drop-shadow-lg" : "bg-transparent"
        ):(pathName==="/auth/login"?"text-black bg-bone drop-shadow-lg":"text-black bg-bone drop-shadow-lg")} transform-all duration-200 ease-in-out  relative`}
      >
        {/* Menu desplegable */}
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
              <Link onClick={()=>setIsActive(false)} href={"/"}>Home</Link>
              <Link onClick={()=>setIsActive(false)} href={"/products"}>Productos</Link>
              <Link onClick={()=>setIsActive(false)} href={"/profile"}>Profile</Link>
              <Link onClick={()=>setIsActive(false)} href={"/cart"}>Carrito</Link>

            </div>
          </div>
        </div>
        <div className='flex items-center justify-center h-full' onClick={()=>setIsActive(!isActive)}>
            <BurgerButton className={` h-[30px] w-[30px] ${pathName=="/"?(scroll>changeState?"stroke-black":"stroke-white"):("stroke-black")} `} />
        </div>
        <Link href={"/"} onClick={()=>setIsActive(false)}>
          <LogoIcon className={`w-14 ${pathName=="/"?(scroll>changeState?"fill-black":"fill-white"):("fill-black")} `}/>
        </Link>
        <Link href={"/"} onClick={()=>setIsActive(false)}>
          <h1 className={`title text-3xl ${pathName=="/"?(scroll>changeState?"text-black":"text-white"):("text-black")}`} >damonhase</h1>
        </Link>
        {/* profile and cart*/}
        <div className="flex items-center justify-center h-full">
          <Link href={"/profile"} onClick={()=>setIsActive(false)}><ProfileIcon className={` h-[30px] w-[30px] fill-black `}   fill={`${pathName=="/"?(scroll>changeState?"#000000":"#ffffff"):("#000000")}`}  /></Link>
          <Link href={"/cart"} onClick={()=>setIsActive(false)}><CartIcon className={`h-[30px] w-[30px] ${pathName=="/"?(scroll>changeState?"stroke-black":"stroke-white"):("stroke-black")}`} /></Link>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default NavBar;
