"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";
import {
  addMyWishlist,
  deleteMyWishlist,
} from "@/app/wishlist/wishlist.actions";
import { toast, ToastContainer } from "react-toastify";

interface HeartButtonProps {
  productId: string;
  initialAdded?: boolean;
}

export default function HeartButton({
  productId,
  initialAdded = false,
}: HeartButtonProps) {
  const [added, setAdded] = useState(initialAdded);
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      if (!added) {
        await addMyWishlist(productId);
        toast.success(`Added successfully `);
        setAdded(true);
        console.log(`Product ${productId} added to wishlist`);
      } else {
        await deleteMyWishlist(productId);
        setAdded(false);
        console.log(`Product ${productId} removed from wishlist`);
      }
    } catch (err: any) {
      console.error("Wishlist action error:", err);
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      variant="ghost"
      size="icon"
      className={`p-2 rounded-full  transition-all ${
        added
          ? "text-red-600 scale-110"
          : "text-gray-600 shadow-lg hover:text-red-600"
      }`}
    >
      <FaHeart size={20} />
    </Button>
  );
}
