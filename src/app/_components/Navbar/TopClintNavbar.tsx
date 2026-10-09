"use client";

import Link from "next/link";
import { FaRegUser, FaUserPlus } from "react-icons/fa6";
import LogoutButton from "./logoutButton";
import { useSession } from "next-auth/react";

export default function TopClintNavbar() {
  const { data, status } = useSession();

  const userName = data?.user?.name;
  const isUserAuthenticated = status === "authenticated";

  return (
    <div className="flex items-center gap-4">
      {isUserAuthenticated ? (
        <div className="flex gap-2">
          <span className="text-green-600 flex items-center gap-1 font-bold">
            <FaRegUser />
            {userName}
          </span>

          <LogoutButton />
        </div>
      ) : (
        <>
          {" "}
          <Link className="flex items-center gap-2" href="/Login">
            <FaRegUser />
            Sing In
          </Link>
          <Link className="flex items-center gap-2" href="/Register">
            {" "}
            <FaUserPlus />
            Sing up
          </Link>
        </>
      )}
    </div>
  );
}
