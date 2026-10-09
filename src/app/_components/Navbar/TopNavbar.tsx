import { FaGift } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import TopClintNavbar from "./TopClintNavbar";

export default function TopNavbar() {
  // const res = await getServerSession();

  // const userName = res?.user?.name;

  // const isUserAuthenticated = !!userName;

  return (
    <div>
      <div className="flex justify-between px-9 py-2">
        <div className="flex justify-between gap-5">
          <h5 className="flex items-center gap-2">
            <FaCarSide className="text-green-600 " /> Free Shipping on Orders
            500 EGP
          </h5>
          <h5 className="flex items-center gap-2">
            <FaGift className="text-green-600" /> New Arrivals Daily
          </h5>
        </div>
        <div className=" flex gap-3">
          <a className="flex items-center gap-2 text-gray-500 text-sm" href="#">
            <FaPhoneAlt className="text-green-600" /> +1 (800) 123-4567
          </a>
          <a className="flex items-center gap-2 text-gray-500 text-sm" href="#">
            {" "}
            <MdEmail className="text-blue-800" />
            support@freshcart.com
          </a>

          {/* {isUserAuthenticated ? (
            <> */}

          <TopClintNavbar />

          {/* </>
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
          )} */}
        </div>
      </div>
      <hr />
    </div>
  );
}
