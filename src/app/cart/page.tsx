import { getUserCart } from "@/Api/services/route.api";
// import { CartResponse } from "../interface";
import { CartResponse } from "@/Api/interface";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import RemoveProductButton from "./RemoveProductButton";
import UpdateProuductCountButton from "./UpdateProuductCountButton";
import Link from "next/link";
export default async function Cart() {
  const userCart = await getUserCart();
  if (!userCart) {
    return;
  }
  const { products, totalCartPrice, _id } = userCart as CartResponse;
  return (
    <>
      <div className="text-center py-9">
        <h2 className="text-3xl font-bold">Shopping Cart</h2>
        <div className="w-20 h-1 bg-green-600 mx-auto mt-2 rounded"></div>
      </div>
      <div>
        <Link href={`/cart/${_id}`}>
          <Button
            className="
      w-full
      bg-green-600
      hover:bg-green-700
      text-white
      shadow-lg
      hover:shadow-green-500/40
      rounded-2xl
      px-6 py-3
      text-lg font-semibold
      transition-all duration-300
      flex items-center justify-center gap-2 "
          >
            Pay for your cart
          </Button>
        </Link>
      </div>
      <Table>
        <TableCaption>Your Cart Items</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Product</TableHead>
            <TableHead className="font-bold">Price</TableHead>
            <TableHead className="font-bold">Count</TableHead>
            <TableHead className="font-bold">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.imageCover}
                    className="w-20 h-20 object-cover rounded-md"
                    alt={item.product.title}
                  />
                  <span className="font-medium text-left">
                    {item.product.title}
                  </span>
                </div>
              </TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <span className="font-bold  text-black rounded-md">
                    {item.count}
                  </span>
                  <div className="flex items-center gap-2">
                    <UpdateProuductCountButton
                      isInCrement
                      id={item.product.id}
                      newCount={item.count + 1}
                    />
                    <UpdateProuductCountButton
                      id={item.product.id}
                      newCount={item.count - 1}
                    />
                  </div>
                  <RemoveProductButton id={item.product.id} />
                </div>
              </TableCell>
              <TableCell>{item.price * item.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="font-bold" colSpan={3}>
              Total Cart Price
            </TableCell>
            <TableCell className="font-bold">{totalCartPrice}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="w-full flex justify-center p-4">
        <Button className="w-1/2 p-2">remove all product</Button>
      </div>
    </>
  );
}
