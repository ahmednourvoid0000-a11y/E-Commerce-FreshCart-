"use client";
import { useCart, cartContextType } from "@/app/_context/cartContext";
// import { cartContextType } from './../../_context/cartContext';

// import { cartContextType, useCart } from "@/app/_context/cartContext";

import { Button } from "@/components/ui/button";
import { deleteProductFromCart } from "./cart.actions";
import { toast, ToastContainer } from "react-toastify";
export default function RemoveProductButton({ id }: { id: string }) {
  const { updateNumberOfCartItem } = useCart() as cartContextType;
  async function handelRemoveElement() {
    const res = await deleteProductFromCart(id);
    if (res === null) {
      toast.error("error");
    } else {
      updateNumberOfCartItem(res);
      toast.success("Product Deleted Successfully");
      // revalidatePath('/cart')
    }
  }

  return (
    <div>
      <Button onClick={handelRemoveElement} variant="destructive" size="sm">
        Remove
        <ToastContainer />
      </Button>
    </div>
  );
}
