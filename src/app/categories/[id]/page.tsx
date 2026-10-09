import { FaFolder } from "react-icons/fa6";
import { getSubCategories } from "@/Api/services/route.api";

interface Props {
  params: Promise<{
    id: string;
  }>;
}
export default async function CategoryDetails({ params }: Props) {
  const { id } = await params;
  const subCategories = await getSubCategories(id);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Subcategories</h2>
      <div className="grid grid-cols-4 gap-6">
        {subCategories.map((sub: any) => (
          <div
            key={sub._id}
            className="bg-gray-100 rounded-xl p-6 flex flex-col items-center justify-center shadow hover:shadow-lg transition"
          >
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <span className="text-green-600 text-2xl">
                <FaFolder />
              </span>
            </div>
            <h3 className="font-bold text-center text-lg">{sub.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
