import { getAllProducts } from "@/Api/services/route.api";
import ProductCard from "./_components/ProductCard/ProductCard";
import Link from "next/link";
import Myswiper from "./_components/MySwiper/MySwiper";
import image1 from "@images/slider-image-3.jpeg";
import image2 from "@images/slider-image-2.jpeg";
import image3 from "@images/slider-image-1.jpeg";
import CategoriesShop from "./_components/CategoriesShop/CategoriesShop";
// import { FaArrowRotateLeft ,FaStar} from "react-icons/fa6";
// import { FaCarSide, FaHeadphones  } from "react-icons/fa";
import {
  FaArrowRotateLeft,
  FaStar,
  FaCarSide,
  FaHeadphones,
} from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";
export default async function page() {
  const allProduct = await getAllProducts();
  console.log("allProduct", allProduct);

  return (
    <>
      <div className=" relative">
        <Myswiper imagesList={[image1.src, image2.src, image3.src]} />
        {/* <div className="bg-green-600 absolute top-0 left-0 w-full h-full opacity-60 z-10 ">
          <p className="text-white">
            Premium Quality Guaranteed Fresh from farm to your table
          </p>
        </div> */}
      </div>
      <div className=" text-black py-4 mt-3 flex justify-around text-sm">
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

        <div className="flex items-center gap-2 shadow-xl p-6">
          <FaHeadphones size={30} color="pink" /> 24/7 Support Contact us
          anytime
        </div>
      </div>
      <div>
        <CategoriesShop />
      </div>
      <div className="flex gap-6 mt-10 px-14">
        <div className="bg-green-600 text-white rounded-xl p-4 flex-1 relative overflow-hidden">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-4">
            Deal of the Day
          </span>
          <h2 className="text-2xl font-extrabold mt-4">Fresh Organic Fruits</h2>
          <p className="mt-2 text-sm">
            Get up to 40% off on selected organic fruits
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-3xl font-extrabold">40% OFF</span>
            <span className="text-sm">
              Use code: <strong>ORGANIC40</strong>
            </span>
          </div>
          <button className="mt-6 bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-100 flex items-center gap-2">
            Shop Now
          </button>
        </div>
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-xl p-6 flex-1 relative overflow-hidden">
          <span className="bg-orange-300 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <FaStar /> New Arrivals
          </span>
          <h2 className="text-2xl font-extrabold mt-4">Exotic Vegetables</h2>
          <p className="mt-2 text-sm">
            Discover our latest collection of premium vegetables
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-3xl font-extrabold">25% OFF</span>
            <span className="text-sm">
              Use code: <strong>FRESH25</strong>
            </span>
          </div>
          <button className="mt-6 bg-white text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-100 flex items-center gap-2">
            Explore Now
          </button>
        </div>
      </div>

      <div className="p-3 md:p-7 lg:p-10">
        <h2 className=" text-3xl mx-8 p-3 font-extrabold">Shop By Category</h2>
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-4 lg:gap-3 ">
          {allProduct?.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} />{" "}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
