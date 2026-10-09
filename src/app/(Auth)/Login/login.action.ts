"use server";

import { getUserCart } from "@/Api/services/route.api";

export async function getCurrentloggedInUserCart() {
  return getUserCart();
}
