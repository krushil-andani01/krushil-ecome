import React, { useState } from "react";

export default function ProductColorVariant(props: any) {
  const [color, setColor] = useState<any>(0);
  return (
    <div className="mt-6 items-center pb-5">
      <div className="mb-2">
        <p className="font-bold  text-base md:text-base">COLOR:</p>
      </div>
      <div>
        <div className="flex gap-x-2">
          {props?.color?.map((item: any, index: number) => (
            <div
              className={
                color === index
                  ? `h-10 w-10 object-cover rounded-full border-2 border-green-700  p-[2px] hover:cursor-pointer`
                  : `h-10 w-10 object-cover rounded-full border-2 border-gray-200 p-[2px] hover:cursor-pointer`
              }
              onClick={() => setColor(index)}
              style={{ background: `${item.colorName}` }}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
