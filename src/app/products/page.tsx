"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import productModel from "../types/models/productModel";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const [products, setProducts] = useState<productModel[] | undefined>();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState<string[] | undefined>();
  const [category, setCategory] = useState<string | undefined>(
    searchParams.get("category") || undefined
  );

  const handleData = async () => {
    setLoading(true);
    if (category) {
      await fetch(`/api/products?category=${category}`)
        .then(async (res) => {
          const data = await res.json();
          setProducts(data.response);
          categories
          !categories&&setCategories(data.categories);
          setLoading(false);

          return;
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      await fetch("/api/products")
        .then(async (res) => {
          const data = await res.json();
          setProducts(data.response);
          !categories&&setCategories(data.categories);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  useEffect(() => {
    handleData();
  }, [category]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (products) {
    return (
      <div className="w-screen min-h-screen pt-[10vh] bg-bone">
        <h1 className="text-4xl font-bold p-5 title">Products</h1>
        
        <div className="w-full flex items-center px-10 py-5 mb-2 justify-start gap-20 overflow-x-scroll">
        <Link href={"/products"} onClick={() => setCategory(undefined)}>
          All
        </Link>
          {categories?.map((cat, index) => {
            return (
              <div key={index} className="capitalize">
                <Link
                  href={`/products?category=${cat.toLowerCase()}`}
                  onClick={() => setCategory(cat.toLowerCase())}
                >
                  {cat.toLowerCase()}
                </Link>
              </div>
            );
          })}

          <Link
            href={`/products`}
            onClick={() => setCategory("favorites")}
          >
            Favorites
          </Link>
        </div>

        {/* grid */}
        {loading ? (
          <div className="w-screen h-screen flex flex-col justify-center items-center">
            <Image
              width={100}
              height={100}
              alt="logo"
              src={"/images/Isotipo-03.png"}
            />
            <span>Loading...</span>
          </div>
        ) : (
          <div
            className={`grid grid-cols-2 ${
              "grid-rows-" + Math.ceil(products.length / 2)
            } gap-2`}
          >
            {products.map((product, index) => {
              return (
                <div className="bg-white drop-shadow-md h-[40vh]" key={index}>
                  <Link
                    href={`/products/${product.id}`}
                    className="w-full h-full"
                  >
                    <div className="flex justify-center items-center w-full h-[65%] border border-red-400 overflow-hidden">
                      <Image
                        width={200}
                        height={300}
                        alt="masl1"
                        src={`/images/${product.image}`}
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
        )}
      </div>
    );
  } else {
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
  }
};

export default Page;
