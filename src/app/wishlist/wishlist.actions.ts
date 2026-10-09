"use server";

import { deCodeUserToken } from "@/app/utils";

export async function getMyWishlist() {
  const token = await deCodeUserToken();
  if (!token) {
    console.error("error");
    throw new Error("Please login first");
  }

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
    method: "GET",
    headers: {
      token: token,
    },
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Failed", data);
    throw new Error(data.message || `Server error (${res.status})`);
  }

  return data;
}

export async function addMyWishlist(productId: string) {
  const token = await deCodeUserToken();
  if (!token) throw new Error("Please login first");

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
    method: "POST",
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Add Wishlist Failed:", data);
    throw new Error(data.message || "Failed to add to wishlist");
  }

  return data;
}

export async function deleteMyWishlist(productId: string) {
  const token = await deCodeUserToken();
  if (!token) throw new Error("Please login first");

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
    {
      method: "DELETE",
      headers: { token: token },
    },
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("Delete Wishlist Failed:", data);
    throw new Error(data.message || "Failed to delete from wishlist");
  }

  return data;
}
