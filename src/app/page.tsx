"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Scroller from "./components/Scroller";

export default function Home() {
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);

  const handlePng = ()=>{
    scroll<=height/5?scroll/2:height/5
    return 5 
  }


  useEffect(() => {
    setHeight(window.innerHeight);
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="relative z-0 w-screen h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/portada.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      <div className="relative w-full h-[75vh] bg-bone ">
        <Scroller/>
        <div className={`border absolute border-red-500 w-[300px] right-1/2 translate-x-1/2`} style={{bottom:handlePng()}}>
          <Image
            width={300}
            height={400}
            src={"/images/home2.png"}
            alt="home"
            
          />
        </div>
      </div>
      <div className="relative w-full h-[40vh] bg-[#F4F4F4] ">

      </div>
    </main>
  );
}
