"use client";

import { Button } from "@/components/ui/button";

import { updateProuductCount } from "./cart.actions";
import { toast, ToastContainer } from "react-toastify";
export default function UpdateProuductCountButton({
  isInCrement = false,
  id,
  newCount,
}: {
  isInCrement?: boolean;
  id: string;
  newCount: number;
}) {
  async function HandelUpdateCount() {
    const numOfCartItem = await updateProuductCount(id, newCount);
    if (!numOfCartItem) {
      toast.success(
        `Product count ${isInCrement ? "Increment" : "Decrement"} Successfully`,
      );
    } else {
      toast.error("error");
    }
  }

  return (
    <div>
      <Button onClick={HandelUpdateCount} size="icon" variant="outline">
        {isInCrement ? "+" : "-"}
        <ToastContainer />
      </Button>
    </div>
  );
}
