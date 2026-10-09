"use client";
import { createContext, ReactNode, useContext, useState } from "react";
// import { CartResponse } from "../interface";

import { CartResponse } from "../../Api/interface";

export interface cartContextType {
  numberOfCartItems: number;
  updateNumberOfCartItem: (num: number) => void;
}

export const CartContext = createContext<cartContextType>({
  numberOfCartItems: 0,
  updateNumberOfCartItem(num: number) {},
});

export default function CartContextProvider({
  children,
  res,
}: {
  children: ReactNode;
  res: CartResponse | undefined;
}) {
  const [numberOfCartItems, setNumberOfCartItems] = useState(() => {
    return res === undefined ? 0 : (res as CartResponse).products.length;
  });

  function updateNumberOfCartItem(num: number) {
    setNumberOfCartItems(num);
  }

  return (
    <CartContext.Provider value={{ numberOfCartItems, updateNumberOfCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const res = useContext(CartContext);
  if (!res) {
    throw new Error("Cannot use cart outside CartProvider");
  }
  return res;
}
