import Link from "next/link";
import { useState } from "react";
import ProductDiscount from "./ProductDiscount";
import ProductWishlist from "./ProductWishlist";
import { IProducts } from "./Shop";
import Model from "../detail/Model";
interface IProductRowProps {
  item: IProducts;
}
export default function ProductRow(props: IProductRowProps) {
  const [isLike, setIsLike] = useState<number>(0);
  const [openModel, setOpenModel] = useState<boolean>(false);
  const [slug, setSlug] = useState("");
  const { item } = props;

  return (
    <div className="border border-gray-100">
      <div className="relative group cursor-pointer  h-[450px] w-full">
        <img
          src={
            item?.images[0]?.url
              ? item?.images[0]?.url
              : "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
          }
          className="h-full w-full sm:hover:opacity-0 object-fill"
        />
        <div className="hidden sm:block absolute top-0 right-0 bottom-0 left-0 w-full h-[450px] overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
          <img
            src={
              item?.images?.[1]?.url
                ? item?.images[1]?.url
                : "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
            }
            className="h-full w-full object-fill"
          />
        </div>
        <div className="hidden sm:block opacity-0 group-hover:opacity-100 duration-300 absolute bottom-0  h-10 w-full bg-green-700">
          <div
            className="my-2 flex justify-center cursor-pointer"
            onClick={async () => {
              await setSlug(item.slug);
              await setOpenModel(true);
            }}
          >
            <span className="text-center uppercase text-white ">
              View Products
            </span>
          </div>
        </div>
        <div className="absolute top-3 left-2">
          <ProductDiscount />
        </div>
        <div className="absolute top-3 right-2">
          <ProductWishlist item={item} isLike={isLike} setIsLike={setIsLike} />
        </div>
        {/* <div className="hidden sm:block opacity-0 group-hover:opacity-100 duration-300 absolute lg:bottom-12 md:bottom-11 right-3">
          <div className="grid grid-cols-2 gap-x-1  ">
            <div className="bg-white rounded-full p-2 hover:bg-green-700 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="bg-white rounded-full p-2 hover:bg-green-700 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-[14px] overflow-hidden mx-1 mb-2 bg-white ">
        <div
          style={{
            display: "-webkit-box",
            maxWidth: "100%",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          <Link href={`/detail/${item?.slug}`}>
            <p className=" truncate text-lg overflow-hidden indent-2   font-normal hover:underline  cursor-pointer">
              {item?.title}
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-[auto_auto] justify-center mt-2 gap-x-2">
          <span className="text-lg line-through text-gray-500">
            Rs. {item?.price * 2}
          </span>
          <span className="text-lg text-gra">Rs. {item?.price}</span>
        </div>
      </div>
      {openModel && (
        <Model open={openModel} setOpen={setOpenModel} slug={slug} />
      )}
    </div>
  );
}
