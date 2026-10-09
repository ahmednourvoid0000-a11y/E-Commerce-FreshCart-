import Link from "next/link";
// import { productShopType } from "@/interface";
import { getAllBrands } from "@/Api/services/route.api";
export default async function brand() {
  const brands = await getAllBrands();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl p-9  ">
        <h2 className="text-2xl font-extrabold mt-4">All Products</h2>
        <p className="mt-2 text-sm">Explore our complete product collection</p>
      </div>
      <h2 className="text-3xl font-extrabold mb-8">Shop By Brand</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands?.map((brand) => (
          <Link
            key={brand._id}
            href={`/products?brand=${brand._id}`}
            className="group flex flex-col items-center bg-white rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-primary-500"
          >
            <div className="w-24 h-24 flex items-center justify-center mb-3">
              <img
                src={brand.image}
                alt={brand.name}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">
              {brand.name}
            </h3>
            <span className="text-xs text-primary-600 group-hover:text-primary-500 font-medium">
              View Products
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
