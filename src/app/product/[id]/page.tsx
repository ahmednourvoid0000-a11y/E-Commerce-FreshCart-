import { getSpecificProduct } from "@/Api/services/route.api";
import AddToProductButton from "@/app/_components/ProductCard/AddToProductButton";
import {
  FaHeart,
  FaEye,
  FaSyncAlt,
  FaStar,
  FaPlusCircle,
} from "react-icons/fa";

import { FaArrowRotateLeft, FaCarSide, FaHeadphones } from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";

export default async function productDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log("idss", id);
  const productDetails = await getSpecificProduct(id);
  const discount = productDetails?.priceAfterDiscount
    ? (
        ((productDetails?.price - productDetails?.priceAfterDiscount) /
          productDetails?.price) *
        100
      ).toFixed(0)
    : "";

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 shadow p-4 border ">
        <img
          src={productDetails?.imageCover}
          alt={productDetails?.title}
          className="w-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3 border gap-3 p-4 shadow">
        <div className="mt-3">
          <p className="text-gray-500 text-sm">
            {productDetails?.category?.name}
          </p>

          <h3 className="font-extrabold">{productDetails?.title}</h3>

          <div className="flex items-center gap-1 text-yellow-400 mt-1">
            <FaStar className="text-yellow-400" />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-300" />

            <span className="text-gray-500 text-sm ml-1">
              {productDetails?.ratingsAverage}({productDetails?.ratingsQuantity}
              )
            </span>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              {productDetails?.priceAfterDiscount ? (
                <>
                  <span className="text-green-600 line-through font-semibold">
                    {productDetails?.price} EGP
                  </span>
                  <span className="text-green-600 font-bold">
                    {productDetails?.priceAfterDiscount} EGP
                  </span>
                </>
              ) : (
                <span className="text-green-600 font-bold">
                  {productDetails?.price} EGP
                </span>
              )}

              {productDetails?.priceAfterDiscount && (
                <span className=" bg-red-500 text-white font-bold px-4 py-1 rounded-full">
                  Save {discount}%
                </span>
              )}
            </div>

            <div></div>
            {/* <AddToProductButton id={productDetails?.id}/> */}
            {/* <AddToProductButton id={productDetails?._id}/> */}
            {productDetails && <AddToProductButton id={productDetails._id} />}
            {/* <button className="  p-2 rounded-full">
                      <FaPlusCircle size={30} className="text-green-600" />
                    </button> */}
          </div>
        </div>

        <div>
          <p
            className="text-gray-600 dark:text-dark-muted text-bold leading-relaxed border-t
                          border-gray-100 dark:border-dark-border pt-4"
          >
            {productDetails?.description}
          </p>

          {productDetails?.brand && (
            <div className="pt-2 text-sm  text-gray-500 dark:text-dark-muted">
              <span className="font-medium bg-green-400 p-1 text-gray-700 dark:text-gray-200">
                {productDetails?.brand.name}
              </span>
            </div>
          )}
        </div>

        <div className=" text-black  mt-3 flex justify-around text-sm">
          <div className="flex items-center gap-2 shadow-xl p-6">
            <FaCarSide size={30} color="blue" /> Free Shipping{" "}
            <span>On orders over 500 EGP</span>
          </div>
          <div className="flex items-center gap-2 shadow-xl p-6">
            <BiCurrentLocation size={30} color="green shadow-xl p-6" /> Secure
            Payment 100% secure checkout
          </div>
          <div className="flex items-center gap-2 shadow-xl p-6">
            <FaArrowRotateLeft size={30} color="orange" /> Easy Returns 14-day
            return policy
          </div>
        </div>
      </div>
    </div>
  );
}
