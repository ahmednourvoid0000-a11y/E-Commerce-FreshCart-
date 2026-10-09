"use client";

import { useState, useEffect } from "react";
import { deleteMyWishlist, getMyWishlist } from "./wishlist.actions";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface WishlistItem {
  _id: string;
  title?: string;
  name?: string;
  price: number;
  imageCover?: string;
  image?: string;
}
import Link from "next/link";
import AddToProductButton from "../_components/ProductCard/AddToProductButton";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadWishlist = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getMyWishlist();

        const items = data?.data?.items || data?.items || data?.data || [];

        console.log(`Loaded ${items.length} wishlist items`);
        setWishlist(items);
      } catch (err: any) {
        console.error("Load wishlist error:", err);
        setError(err.message || "Failed to load wishlist");
      } finally {
        setLoading(false);
      }
    };

    loadWishlist();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteMyWishlist(id);
      setWishlist((prev) => prev.filter((item) => item._id !== id));
    } catch (err: any) {
      console.error("Delete error:", err);
      alert(err.message || "Failed to delete");
    }
  };

  if (loading) {
    return <div className="p-10 text-center text-lg">Loading wishlist...</div>;
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-600">
        {error}
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        My Wishlist ({wishlist.length})
      </h1>

      {wishlist.length === 0 ? (
        <>
          <p className="text-center text-gray-500 text-xl py-20">
            Your wishlist is empty
          </p>
          <Link
            href={"/"}
            className="p-3 flex aligh-center text-center rounded bg-red-600 text-white font-bold"
          >
            add to product
          </Link>
        </>
      ) : (
        <Table>
          <TableCaption>My Wishlist Items</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {wishlist.map((item) => (
              <TableRow key={item._id}>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <img
                      src={item.imageCover || item.image}
                      alt={item.title || item.name}
                      className="w-20 h-20 object-cover rounded-md border"
                    />
                    <span className="font-medium">
                      {item.title || item.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-green-600 font-bold text-lg">
                    {item.price?.toLocaleString()} EGP
                  </span>
                </TableCell>
                <TableCell className="text-center flex items-center gap-4 pt-9 ">
                  <Button
                    onClick={() => handleDelete(item._id)}
                    variant="destructive"
                    className="flex items-center gap-2"
                  >
                    <MdDelete size={30} />
                  </Button>
                  <span className="text-center flex px-2 rounded bg-green-200">
                    <AddToProductButton id={item._id} /> Add To Product
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
