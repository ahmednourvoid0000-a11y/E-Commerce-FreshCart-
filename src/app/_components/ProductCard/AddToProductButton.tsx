"use client";
import { Button } from "@/components/ui/button";
import { FaPlusCircle } from "react-icons/fa";
import { MouseEvent } from "react";
import { addProductToCart } from "@/app/cart/cart.actions";
import { toast, ToastContainer } from "react-toastify";
import { useCart } from "@/app/_context/cartContext";
import { cartContextType } from "./../../_context/cartContext";
// cartContextType
interface addToCardButtonProps {
  id: string;
}
export default function AddToProductButton({ id }: addToCardButtonProps) {
  const { updateNumberOfCartItem } = useCart() as cartContextType;
  async function handelButton(e: MouseEvent) {
    e.preventDefault();
    const numberOfItem = await addProductToCart(id);
    if (numberOfItem != false) {
      toast.success(`Added successfully `);
      updateNumberOfCartItem(numberOfItem);
    } else {
      toast.error("Something went wrong");
    }
  }

  return (
    <div>
      <Button onClick={handelButton} className="p-2 bg-green-600 rounded-full">
        <FaPlusCircle size={30} className="text-white " />
        <ToastContainer />
      </Button>
    </div>
  );
}
