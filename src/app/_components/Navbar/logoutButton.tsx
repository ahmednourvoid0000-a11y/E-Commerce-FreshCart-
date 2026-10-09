"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handelLogout() {
    await signOut({ redirect: false });
    router.push("/Login");
  }

  return (
    <>
      <span onClick={handelLogout} className=" text-gray-500 cursor-pointer">
        Logout
      </span>
    </>
  );
}
