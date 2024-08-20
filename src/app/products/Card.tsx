"use client";
import Link from "next/link";
import React, {useState} from "react";
import Image from "next/image";
import productModel from "../types/models/productModel";

const Card = ({product}:{product:productModel}) => {
    const [quantity, setQuantity] = useState<number>(1)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  return (
    <div className="w-full h-full">
      <Link href={`/products/${product.id}`} className="w-full h-full">
        <div className="flex justify-center items-center w-full h-[65%] border border-red-400 overflow-hidden">
          <Image
            width={200}
            height={300}
            alt="masl1"
            src={`/images/${product.image}`}
          />
        </div>

        <div className="w-full h-[35%]">
          <h2 className="text-lg font-bold capitalize">{product.name}</h2>
          <p>{formatPrice(product.price)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
