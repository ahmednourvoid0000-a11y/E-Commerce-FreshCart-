import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import RegisterForm from "./RegisterForm";

export default function Login() {
  return (
    <>
      <div className="p-12  shadow-2xl rounded-2xl m-7">
        <h2 className="text-center font-extrabold text-5xl my-3">
          <span className="text-green-600">FreshCart</span> <br /> Welcome Back!
        </h2>
        <p className="text-center text-gray-500">
          Sign in to continue your fresh shopping experience
        </p>
        <div className=" flex my-7">
          <button className=" w-1/2 flex items-center justify-center gap-3 mx-2 bg-gradient-to-r from-green-400 to-green-800   border-gray-300 text-white py-3.5 px-4 rounded-xl font-medium  shadow-2xl">
            <FcGoogle className="text-2xl" />
            Google
          </button>
          <button className=" w-1/2 mx-2 flex items-center justify-center gap-3  bg-gradient-to-r from-green-400 to-green-800   text-white py-3.5 px-4 rounded-xl font-medium  shadow-2xl">
            <FaFacebookF className="text-2xl" />
            Facebook
          </button>
        </div>
        <p className="text-center mb-3 text-gray-500 ">
          OR CONTINUE WITH EMAIL
        </p>

        <RegisterForm />
      </div>
      <div></div>
    </>
  );
}
