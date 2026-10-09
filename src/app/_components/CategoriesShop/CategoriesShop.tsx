import { getAllCategories } from "@/Api/services/route.api";
import Link from "next/link";

export default async function CategoriesShop() {
  const allCategories = await getAllCategories();
  //   console.log(allCategories)

  return (
    <div className="p-9">
      <div className="flex justify-between p-10">
        <h2 className="text-3xl font-extrabold ">Shop By Category</h2>
        <Link href={"/"}>View All Categories</Link>
      </div>
      {/* <div className="grid grid-cols-6 gap-4 ">
        {allCategories?.map((category) => (
          <div
            className=" p-2 border shadow rounded-lg text-center flex flex-col justify-center items-center "
            key={category._id}
          >
            <div>
              <img
                src={category.image}
                className=" rounded-full w-20 h-20"
                alt={category.name}
              />
            </div>
            <h3 className="py-3 font-extrabold">{category.name}</h3>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-6 gap-4 ">
        {allCategories?.map((category) => (
          <Link key={category._id} href={`/categories/${category._id}`}>
            <div className="p-2 border shadow rounded-lg text-center flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition">
              <div>
                <img
                  src={category.image}
                  className="rounded-full w-20 h-20"
                  alt={category.name}
                />
              </div>
              <h3 className="py-3 font-extrabold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
