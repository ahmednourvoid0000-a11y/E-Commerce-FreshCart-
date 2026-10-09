import { ClipLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="flex justify-center items-center text-black h-screen">
      <ClipLoader size={40} />
    </div>
  );
}
