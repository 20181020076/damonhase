"use client";
import productModel from "@/app/types/models/productModel";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useCartStore from "@/app/store/cartStore";
const Page = ({ params }: { params: { id: number } }) => {
  const [product, setProduct] = useState<productModel | string>("loading");
  const { add } = useCartStore();
  const [primaryColor, setPrimaryColor] = useState<string>();
  const [secondaryColor, setSecondaryColor] = useState<string | null>();

  const getProduct = async () => {
    await fetch(`/api/products/${params.id}`)
      .then(async (res) => {
        const data = await res.json();
        if (data.error) {
          setProduct("fail");
        } else {
          setProduct(data.response);
        }
      })
      .catch((err) => {
        console.log(err);
        setProduct("fail");
      });
  };
  const handleFormater = (price: number): string => {
    const formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    // Formatear el número
    return formatter.format(price);
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (typeof product === "string") {
    if (product === "loading") {
      return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <Image
            width={100}
            height={100}
            alt="logo"
            src={"/images/Isotipo-03.png"}
          />
          <span>Loading...</span>
        </div>
      );
    } else {
      return (
        <div className="pt-[10vh] w-screen min-h-screen">
          <span>product not found</span>
        </div>
      );
    }
  } else {
    return (
      <div className="pt-[10vh]">
        <div className="w-full h-[60vh] bg-gray-300 overflow-hidden">
          <Image
            width={700}
            height={700}
            alt="details"
            src={`/images/${product.image}`}
            className="w-full"
          />
        </div>
        <div className="w-full h-[30vh]">
          <div className="w-full border border-purple-400">
            <h2 className="block text-2xl font-bold uppercase">
              {product.name}
            </h2>
            <div className="flex gap-4 items-center justify-start">
              <h3 className="font-bold text-xl">price:</h3>
              <span>{handleFormater(product.price)}</span>
            </div>
          </div>
          <div className="w-full h- flex border border-red-500">
            <div className="w-1/2 border border-red-500">
              {/* selector de color pimario */}
              <div className="w-full">
                <h3>Primary Color</h3>
                <div className="flex gap-2">
                  {product.primaryColors.map((color, index) => {
                    console.log(color);
                    return (
                      <div
                        className={`w-5 h-5 rounded-full`}
                        style={{ background: color }}
                        key={index}
                      ></div>
                    );
                  })}
                </div>
              </div>
              {/* selector de color secundario */}
              <div className="w-full">
                <h3>Secondary Color</h3>
                <div className="flex gap-2">
                  {product.primaryColors.map((color, index) => {
                    console.log(color);
                    return (
                      <div
                        className={`w-5 h-5 rounded-full`}
                        style={{ background: color }}
                        key={index}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
                  <div className="">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <button onClick={()=>add({productId:"5",primaryColor:"",secondaryColor:undefined, quantity:3})} className="sticky bg-black text-white w-[85%] h-[42%]">Agregar Al carrito</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Page;
