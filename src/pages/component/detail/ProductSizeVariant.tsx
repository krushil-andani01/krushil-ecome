import React, { useState } from "react";

export default function ProductSizeVariant(props: any) {
  const [size, setSize] = useState<number>(0);
  return (
    <div>
      {props.size && (
        <div className="mt-2  items-center pb-5  ">
          <div className="mb-2">
            <p className="md:font-bold md:text-base font-bold text-base">
              SIZE:
            </p>
          </div>

          <div>
            <div className="flex gap-x-2 ">
              {props.size &&
                props.size?.map((item: any, index: number) => (
                  <div
                    className={
                      size === index
                        ? `h-12 w-14 border border-gray-200  bg-green-700 p-2 cursor-pointer`
                        : `h-12 w-14   border-2 border-gray-200 p-2 cursor-pointer`
                    }
                    onClick={() => setSize(index)}
                    key={index}
                  >
                    <div className="text-center">
                      <p
                        className={
                          size === index
                            ? `text-lg font-medium  text-white`
                            : `text-base font-medium  text-gray-500`
                        }
                      >
                        {item.sizeName}
                      </p>
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
