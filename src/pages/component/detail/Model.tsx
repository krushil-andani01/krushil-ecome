import { Dialog, Transition } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductColorVariant from "./ProductColorVariant";
import ProductSizeVariant from "./ProductSizeVariant";

const product: any = {
  name: "Women's Basic Tee",
  price: "$32",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
  imageAlt: "Back of women's Basic Tee in black.",
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: false },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
interface IModelProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  slug: string;
}

export default function Model(props: IModelProps) {
  const [productDetails, setProductDetails] = useState<any>();
  function getData() {
    fetch(
      `https://ecommerce-rest-api-y2lw.onrender.com/api/getProduct/${props.slug}`
    )
      .then((response) => response.json())
      .then((res) => setProductDetails(res.data));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <Transition.Root show={props?.open ? props?.open : false} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                <span
                  className="hidden md:inline-block md:h-screen md:align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                  enterTo="opacity-100 translate-y-0 md:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 md:scale-100"
                  leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                >
                  <Dialog.Panel className="flex transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-[66rem]">
                    <div className="relative flex items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                      <button
                        type="button"
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                        onClick={() => props.setOpen(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8">
                        <div className="aspect-h-3 h-full min-w-80 aspect-w-2 overflow-hidden rounded-sm bg-gray-100 sm:col-span-4 lg:col-span-5">
                          <Swiper
                            pagination={true}
                            modules={[Pagination, Mousewheel]}
                            mousewheel={true}
                            className="mySwiper"
                          >
                            {productDetails &&
                              productDetails?.images.map(
                                (item: any, index: number) => (
                                  <SwiperSlide key={index}>
                                    <img
                                      src={item?.url}
                                      className="object-cover  object-center"
                                    />
                                  </SwiperSlide>
                                )
                              )}
                          </Swiper>
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                          <h2 className="text-xl font-medium text-gray-900 sm:pr-12">
                            {productDetails?.title}
                          </h2>

                          <section
                            aria-labelledby="information-heading"
                            className="mt-1"
                          >
                            <h3 id="information-heading" className="sr-only">
                              Product information
                            </h3>

                            <p className="font-bold text-3xl text-gray-900">
                              ₹{productDetails?.price}
                            </p>

                            {/* Reviews */}
                            <div className="mt-4">
                              <h4 className="sr-only">Reviews</h4>
                              <div className="flex items-center">
                                <p className="text-sm text-gray-700">
                                  {product.rating}
                                  <span className="sr-only">
                                    {" "}
                                    out of 5 stars
                                  </span>
                                </p>
                                <div className="ml-1 flex items-center">
                                  {[0, 1, 2, 3, 4].map((rating: any) => (
                                    <StarIcon
                                      key={rating}
                                      className={classNames(
                                        product.rating > rating
                                          ? "text-yellow-400"
                                          : "text-gray-200",
                                        "h-5 w-5 flex-shrink-0"
                                      )}
                                      aria-hidden="true"
                                    />
                                  ))}
                                </div>
                                <div className="ml-4 hidden lg:flex lg:items-center">
                                  <span
                                    className="text-gray-300"
                                    aria-hidden="true"
                                  >
                                    &middot;
                                  </span>
                                  <a
                                    href="#"
                                    className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    See all {product.reviewCount} reviews
                                  </a>
                                </div>
                              </div>
                            </div>
                          </section>

                          <section
                            aria-labelledby="options-heading"
                            className="mt-8"
                          >
                            <h3 id="options-heading" className="sr-only">
                              Product options
                            </h3>

                            <form>
                              {/* Color picker */}
                              <ProductColorVariant
                                color={productDetails?.color}
                              />

                              {/* Size picker */}
                              <div className="mt-8">
                                <ProductSizeVariant
                                  size={productDetails?.size}
                                />
                              </div>

                              <button
                                type="submit"
                                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Add to bag
                              </button>

                              <p className="absolute left-4 top-4 text-center sm:static sm:mt-8">
                                <a
                                  href={product.href}
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  View full details
                                </a>
                              </p>
                            </form>
                          </section>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
}
