import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  const products = [
    {
      id: 1,
      name: "mask1",
      description: "la mejor",
      image: "home.png",
      color: "red",
      price: 5000,
    },
    {
      id: 2,
      name: "mask2",
      description: "la mejor",
      image: "mask2.png",
      color: "red",
      price: 5000,
    },
    {
      id: 3,
      name: "mask3",
      description: "la mejor",
      image: "mask3.png",
      color: "red",
      price: 5000,
    },
    {
      id: 4,
      name: "mask1",
      description: "la mejor",
      image: "algo.png",
      color: "red",
      price: 5000,
    },
    {
      id: 5,
      name: "mask1",
      description: "la mejor",
      color: "red",
      price: 5000,
    },
    {
      id: 6,
      name: "mask1",
      description: "la mejor",
      color: "red",
      price: 5000,
    },
    {
      id: 7,
      name: "mask1",
      description: "la mejor",
      color: "red",
      price: 5000000,
    },
  ];
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  return (
    <div className="w-screen min-h-screen pt-[10vh] bg-bone">
      <h1>Productos</h1>
      <div
        className={`grid grid-cols-2 ${
          "grid-rows-" + Math.ceil(products.length / 2)
        } gap-2`}
      >
        {products.map((product, index) => {
          return (
            <div className="bg-white drop-shadow-md h-[40vh]" key={index}>
              <Link href={`/products/${product.id}`} className="w-full h-full">
                <div className="flex justify-center items-center w-full h-[65%] border border-red-400 overflow-hidden">
                  <Image
                    width={200}
                    height={300}
                    alt="masl1"
                    src={"/images/home.png"}
                  />
                </div>
                <div className="w-full h-[35%]">
                  <h2 className="text-lg font-bold capitalize">
                    {product.name}
                  </h2>
                  <p>{formatPrice(product.price)}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
