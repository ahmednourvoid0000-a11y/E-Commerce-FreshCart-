import { Button } from "@/components/ui/button";
import AddToProductButton from "@/app/_components/ProductCard/AddToProductButton";
import { FaHeart, FaEye, FaSyncAlt, FaStar } from "react-icons/fa";
import { getAllProducts } from "@/Api/services/route.api";
import Link from "next/link";

interface ProductsPageProps {
  searchParams: {
    brand?: string;
  };
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const { brand } = await searchParams;

  const allProducts = await getAllProducts();

  const products = allProducts?.filter(
    (p: any) => p.brand?._id === brand || p.brand === brand,
  );

  return (
    <div>
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl p-9">
        <h2 className="text-2xl font-extrabold mt-4">Brand Products</h2>
        <p className="mt-2 text-sm">Explore our complete product collection</p>
      </div>

      <div className="p-3 md:p-7 lg:p-10">
        <h2 className="text-3xl mx-8 p-3 font-extrabold">Shop By Brand</h2>

        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products?.map((product: any) => {
            const discount = product.priceAfterDiscount
              ? (
                  ((product.price - product.priceAfterDiscount) /
                    product.price) *
                  100
                ).toFixed(0)
              : "";

            return (
              <Link href={`/product/${product._id}`} key={product._id}>
                <div className="border p-2 gap-3 rounded-2xl relative hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={product.imageCover}
                      alt={product.title}
                      className="w-full object-cover rounded-lg"
                    />

                    {product.priceAfterDiscount && (
                      <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{discount}%
                      </span>
                    )}
                    <div className="absolute right-0 top-0 flex flex-col gap-2 p-2">
                      <Button className="text-gray-600 bg-white p-2 rounded-full hover:text-red-600 shadow">
                        <FaHeart size={14} />
                      </Button>
                      <Button className="text-gray-600 bg-white p-2 rounded-full hover:text-green-600 shadow">
                        <FaSyncAlt size={14} />
                      </Button>
                      <Button className="text-gray-600 bg-white p-2 rounded-full hover:text-green-600 shadow">
                        <FaEye size={14} />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-gray-500 text-sm">
                      {product.category?.name}
                    </p>
                    <h3 className="font-bold">
                      {product.title.split(" ", 2).join(" ")}
                    </h3>

                    <div className="flex items-center gap-1 text-yellow-400 mt-1">
                      <FaStar className="text-yellow-400" />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar className="text-gray-300" />
                      <span className="text-gray-500 text-sm ml-1">
                        {product.ratingsAverage} ({product.ratingsQuantity})
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
                      <AddToProductButton id={product._id} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

          {(!products || products.length === 0) && (
            <p className="text-center text-gray-500 col-span-full">
              No products found for this brand.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
