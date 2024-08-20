"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import productModel from "../types/models/productModel";
import { useSearchParams } from "next/navigation";
import Card from "./Card";

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

  

  if (products) {
    return (
      <div className="w-screen min-h-screen pt-[10vh] bg-bone">
        <h1 className="text-4xl font-bold p-5 title">Products</h1>
        {/* filtering bar */}
        <div className="w-full flex items-center p-2 pb-4 mb-6 justify-start  overflow-x-scroll">
          <div className="flex bg-white px-10 py-4 gap-20 rounded-full drop-shadow-lg">
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
            {/* cards */}
            {products.map((product, index) => {
              return (
                <div className="bg-white drop-shadow-md h-[40vh]" key={index}>
                  <Card product={product}/>
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
