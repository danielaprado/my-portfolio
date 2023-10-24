import { roboto_mono } from "@/app/utils/fonts";
import dashedArrow from "@/app/images/dashed_arrow.svg";
import Image from "next/image";
import CopyButton from "../../geral/CopyButton";

export default function GetInTouch() {
  return (
    <div className="relative w-full flex items-center justify-center md:mt-20 mt-12">
      <CopyButton />
      <div className="relative">
        <p className="max-lg:hidden absolute -right-[300px] -top-56 text-white  text-center text-lg">
          Copy my email <br />& let&apos;s talk!
        </p>
        <Image
          src={dashedArrow}
          alt="Dashed arrow"
          className="max-lg:hidden absolute -right-80 -top-40"
        />
        <p
          className={`${roboto_mono.className} w-[365px] text-justify text-primary/50 max-md:hidden`}
        >
          get in touch get in touch get in touch get in touch get in touch get
          in touch get in touch get in touch get in touch get in touch get in
          touch get in touch get in touch get in touch get in touch get in touch
          get in touch get in touch get in touch get in touch get in touch get
          in touch get in touch get in touch get in touch get in touch get in
          touch get in touch get in touch get in touch get in touch get in touch
          get in touch
        </p>
        <p
          className={`${roboto_mono.className} w-[241px] text-justify text-primary/50 md:hidden`}
        >
          get in touch get in touch get in touch get in touch get in touch get
          in touch get in touch get in touch get in touch get in touch get in
          touch get in touch get in touch get in touch get in touch get in touch
        </p>
      </div>
    </div>
  );
}
