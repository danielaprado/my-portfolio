import { poppins } from "@/app/utils/fonts";

export default function Banner() {
  return (
    <div
      className={`${poppins.className} fixed w-screen bg-red-800 text-white py-2 text-center z-50`}
    >
      My portfolio is a WIP. Thanks for your understanding.
    </div>
  );
}
