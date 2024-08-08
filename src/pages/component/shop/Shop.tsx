"use client";
import { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
// export interface ITempProduct {
//   category: string;
//   description: string;
//   id: number;
//   image: string;
//   rating: {
//     count: number;
//     rate: number;
//   };
//   price: string;
//   title: string;
// }
export interface IProducts {
  _id: string;
  title: string;
  description: string;
  category: string;
  size: [
    {
      _id: string;
      sizeName: string;
    }
  ];
  images: any;
  price: number;
  color: [
    {
      _id: string;
      colorName: string;
      colorCode: string;
    }
  ];
  slug: string;
  subCategory: string;
}
export default function Shop() {
  const [lstProducts, setLstProducts] = useState<any>(null);
  async function getAllProducts() {
    fetch("https://ecommerce-rest-api-y2lw.onrender.com/api/getProduct")
      .then((res) => res.json())
      .then((json) => setLstProducts(json.data));
  }
  useEffect(() => {
    getAllProducts();
  }, []);
  if (!lstProducts) {
    return (
      <div className="text-center bg-white flex justify-center">
        <img
          src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif"
          className="h-96"
        />
      </div>
    );
  }
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  gap-4 grid-cols-1 sm:mt-10 mt-2 mx-2 md:mx-[15px] ">
        {lstProducts?.map((item: IProducts, index: number) => (
          <div key={index}>
            <ProductRow item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
