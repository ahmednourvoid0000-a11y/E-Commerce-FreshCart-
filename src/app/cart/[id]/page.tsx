"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCashOrder, createOnlineOrder } from "../cart.actions";
import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { cartContextType, useCart } from "@/app/_context/cartContext";
import { orderType } from "@/Api/interface";
export default function Page() {
  const detailsInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const postalCodeInput = useRef<HTMLInputElement>(null);
  const cityInput = useRef<HTMLInputElement>(null);
  const { id } = useParams();
  const { updateNumberOfCartItem } = useCart() as cartContextType;
  const router = useRouter();
  async function handelCashOrder() {
    const obj: orderType = {
      shippingAddress: {
        details: detailsInput?.current?.value || "",
        phone: phoneInput?.current?.value || "",
        postalCode: postalCodeInput?.current?.value || "",
        city: cityInput?.current?.value || "",
      },
    };
    const cashOrder = await createCashOrder(id?.toString() || "", obj);
    if (cashOrder) {
      toast.success("Order created successfully!");
      updateNumberOfCartItem(0);
      router.push("/");
    } else {
      toast.error("Failed to create order.");
    }
  }

  async function handelCheckoutSessionOrder() {
    const obj: orderType = {
      shippingAddress: {
        details: detailsInput?.current?.value || "",
        phone: phoneInput?.current?.value || "",
        postalCode: postalCodeInput?.current?.value || "",
        city: cityInput?.current?.value || "",
      },
    };
    const link = await createOnlineOrder(id?.toString() || "", obj);
    if (link === false) {
      toast.error("erorr");
    } else {
      window.open(link, "_self");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-3/4 md:w-1/2 bg-white shadow-lg rounded-2xl p-6 space-y-5">
        <h2 className="text-2xl font-bold text-center">Create Cash Order</h2>
        <div className="space-y-1">
          <Label>Details</Label>
          <Input ref={detailsInput} placeholder="Enter details..." />
        </div>
        <div className="space-y-1">
          <Label>Phone</Label>
          <Input ref={phoneInput} placeholder="Enter phone..." />
        </div>
        <div className="space-y-1">
          <Label>City</Label>
          <Input ref={cityInput} placeholder="Enter city..." />
        </div>
        <div className="space-y-1">
          <Label>Postal Code</Label>
          <Input ref={postalCodeInput} placeholder="Enter postal code..." />
        </div>
        <Button
          onClick={handelCashOrder}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          Create Cash Order
          <ToastContainer />
        </Button>
        <Button
          onClick={handelCheckoutSessionOrder}
          className="w-full bg-red-600 hover:bg-red-800 text-white"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
