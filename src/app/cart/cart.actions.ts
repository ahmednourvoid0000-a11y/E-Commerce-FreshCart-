"use server";

import { revalidatePath } from "next/cache";
import { deCodeUserToken } from "../utils";
import { orderType } from "@/Api/interface";
export async function addProductToCart(productId: string) {
  const userToken = await deCodeUserToken();

  if (!userToken) {
    throw new Error("Session Ended");
  }

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
      method: "POST",
      headers: {
        token: userToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    if (res.ok) {
      const data = await res.json();

      console.log("data", data);
      return data.numOfCartItems;
    } else {
      // throw new Error(data.message || "Something went wrong")
      return false;
    }
    // return data
  } catch (error: any) {
    throw new Error(error.message || "Error adding product");
  }
}

export async function deleteProductFromCart(productId: string) {
  const token = await deCodeUserToken();
  if (token) {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
        {
          method: "delete",
          headers: { token: token },
        },
      );
      if (res.ok) {
        const finalRes = await res.json();
        console.log("datafinalRes", finalRes);
        revalidatePath("/Cart");

        return finalRes.numberOfCartItems;
      } else {
        return null;
      }
    } catch (error) {}
  }
}

export async function updateProuductCount(productId: string, newCount: number) {
  const token = await deCodeUserToken();
  if (token) {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
        {
          method: "put",
          headers: { token: token, "Content-Type": "application/json" },
          body: JSON.stringify({ count: newCount }),
        },
      );
      if (res.ok) {
        const finalRes = await res.json();
        console.log("datafinalRes", finalRes);
        revalidatePath("/Cart");
        return finalRes.numberOfCartItems;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

// export async function deleteAllProductFromCart(productId: string) {
//   const token = await deCodeUserToken()
//   if (!token) return null
//   try {
//     const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
//       method: 'DELETE',
//       headers: { token }
//     })
//     if (!res.ok) return null
//     const finalRes = await res.json()
//     console.log('datafinalResuu', finalRes)
//     revalidatePath('/Cart')
//     return finalRes.numberOfCartItems
//   } catch (error) {
//     console.error('Error deleting all products:', error)
//     return null
//   }
// }

export async function createCashOrder(cartId: string, bodyObject: orderType) {
  const token = await deCodeUserToken();
  if (token) {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,
        {
          method: "post",
          headers: { token: token, "Content-Type": "application/json" },
          body: JSON.stringify(bodyObject),
        },
      );
      if (res.ok) {
        const finalRes = await res.json();
        console.log("createCashOrder", finalRes);
        revalidatePath("/Cart");

        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export async function createOnlineOrder(cartId: string, bodyObject: orderType) {
  const token = await deCodeUserToken();
  if (token) {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
        {
          method: "post",
          headers: { token: token, "Content-Type": "application/json" },
          body: JSON.stringify(bodyObject),
        },
      );
      if (res.ok) {
        const finalRes = await res.json();
        console.log("createCashOrder", finalRes);
        revalidatePath("/Cart");

        return finalRes.session.url;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
