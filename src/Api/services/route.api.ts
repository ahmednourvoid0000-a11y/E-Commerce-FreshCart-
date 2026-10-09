// import { deCodeUserToken } from '@/app/utils';

// deCodeUserToken
import { deCodeUserToken } from "@/app/utils";
import {
  productShopType,
  categoryType,
  CartResponse,
  productBrandsType,
} from "../interface";

export async function getAllProducts(): Promise<productShopType[] | undefined> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`, {
      cache: "no-store",
    });
    const finleRes = await res.json();
    return finleRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getSpecificProduct(
  id: string,
): Promise<productShopType | undefined> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      { cache: "no-store" },
    );
    const finleRes = await res.json();
    return finleRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getAllCategories(): Promise<categoryType[] | undefined> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories`,
    );
    const finleRes = await res.json();
    return finleRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getUserCart(): Promise<CartResponse | undefined> {
  const userToken = await deCodeUserToken();
  if (userToken) {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
        headers: { token: userToken },
        // cache:'force-cache',
        // next:{
        //   tags:['getUserCart']
        // }
      });
      const finleRes = await res.json();
      return finleRes.data;
    } catch (error) {
      console.log("error", error);
    }
  } else {
    return undefined;
  }
}

export async function getAllBrands(): Promise<productBrandsType[] | undefined> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`, {
      cache: "no-store",
    });
    const finleRes = await res.json();
    console.log("ggg", finleRes);
    return finleRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getProductsByBrand(
  brandId: string,
): Promise<productShopType[] | undefined> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getSubCategories(categoriesId: string) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${categoriesId}/subcategories`,
      { cache: "no-store" },
    );

    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.log("error", error);
    return [];
  }
}
