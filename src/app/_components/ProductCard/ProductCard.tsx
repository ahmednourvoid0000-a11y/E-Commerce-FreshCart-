import { Button } from "@/components/ui/button";
import { productCardProps } from "./productCardProps.type";
// HeartButton
import {
  FaHeart,
  FaEye,
  FaSyncAlt,
  FaStar,
  FaPlusCircle,
} from "react-icons/fa";
import AddToProductButton from "./AddToProductButton";
import HeartButton from "./AddWishlist";

export default function ProductCard({ product }: productCardProps) {
  const discount = product.priceAfterDiscount
    ? (
        ((product.price - product.priceAfterDiscount) / product.price) *
        100
      ).toFixed(0)
    : "";

  // const discount ={ product.priceAfterDiscount
  //   ? (<><span>
  //      (
  //       ((product.price - product.priceAfterDiscount) / product.price) *
  //       100
  //     ).toFixed(0)
  //     </span>

  //     <span>
  //       %
  //     </span>
  //     </>):("")} ;

  //   const discount = {product.priceAfterDiscount &&
  //   `${(((product.price - product.priceAfterDiscount) / product.price) * 100).toFixed(0)}%`
  // }
  return (
    <div className=" border p-2 gap-3 rounded-2xl  ">
      <div className="gap-3 relative p-2 " key={product.id}>
        <div className="">
          <img
            src={product.imageCover}
            alt={product.title}
            className="w-full object-cover rounded-lg"
          />

          {/* <span className="absolute top-0 left-0 bg-red-500 text-red-800 text-xs  px-2 py-1 rounded">
            {product.priceAfterDiscount ? `${discount}%` : ""}
          </span> */}

          {product.priceAfterDiscount && (
            <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </span>
          )}

          <div className="absolute right-0 top-0  flex flex-col gap-2  ">
            {/* <Button className="text-gray-600 bg-white p-2 rounded-full hover:text-red-600 shadow">
              <FaHeart size={14} />
            </Button> */}
            <div>
              <HeartButton productId={product.id} />
            </div>

            <Button className="text-gray-600 bg-white p-2 rounded-full hover:text-green-600 shadow">
              <FaSyncAlt size={14} />
            </Button>

            <Button className=" text-gray-600 bg-white p-2 rounded-full hover:text-green-600 shadow">
              <FaEye size={14} />
            </Button>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-gray-500 text-sm">{product.category?.name}</p>

          <h3 className="font-bold">{product.title.split(" ", 2).join(" ")}</h3>

          <div className="flex items-center gap-1 text-yellow-400 mt-1">
            <FaStar className="text-yellow-400" />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-300" />

            <span className="text-gray-500 text-sm ml-1">
              {product.ratingsAverage}({product.ratingsQuantity})
            </span>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              {product.priceAfterDiscount ? (
                <>
                  <span className="text-green-600 line-through font-semibold">
                    {product.price} EGP
                  </span>
                  <span className="text-green-600 font-bold">
                    {product.priceAfterDiscount} EGP
                  </span>
                </>
              ) : (
                <span className="text-green-600 font-bold">
                  {product.price} EGP
                </span>
              )}
            </div>
            <AddToProductButton id={product.id} />
            {/* <button className="  p-2 rounded-full">
              <FaPlusCircle size={30} className="text-green-600" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
