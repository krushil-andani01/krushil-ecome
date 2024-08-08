"use client";
import { useEffect, useState } from "react";

export default function Category() {
  const [lstCategory, setLstCategory] = useState<any>(null);
  function getData() {
    fetch("https://ecommerce-rest-api-y2lw.onrender.com/api/getCategory")
      .then((response) => response.json())
      .then((res) => setLstCategory(res.data));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {lstCategory && (
        <div className="bg-white  py-6 sm:py-8 lg:py-12">
          <h1 className="font-black text-3xl flex justify-center mb-8">
            Category
          </h1>
          <div className="flex mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
              {lstCategory?.map((item: any, index: number) => (
                <div key={index}>
                  <div>
                    <a
                      href="#"
                      className="group mb-2 block h-96   overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                    >
                      <img
                        src={item?.categoryImage ? item?.categoryImage : null}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-125 hover:object-cover"
                      />
                    </a>

                    <div className="flex flex-col">
                      <span className="text-gray-500">Men</span>
                      <a
                        href="#"
                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                      >
                        {item.categoryTitle}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
