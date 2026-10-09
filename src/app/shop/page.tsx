import { getAllProducts } from "@/Api/services/route.api";
import Link from "next/link";
import ProductCard from "../_components/ProductCard/ProductCard";
export default async function shop() {
  const allProduct = await getAllProducts();
  console.log("allProduct", allProduct);
  return (
    <div>
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl p-9  ">
        <h2 className="text-2xl font-extrabold mt-4">All Products</h2>
        <p className="mt-2 text-sm">Explore our complete product collection</p>
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
    </div>
  );
}
