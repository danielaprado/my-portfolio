import { roboto_mono } from "@/app/utils/fonts";
import dashedArrow from "@/app/images/dashed_arrow.svg";
// import copyIcon from "@/app/images/Vector.svg";
import Image from "next/image";
import CopyButton from "../../geral/CopyButton";

export default function GetInTouch() {
  return (
    <div className="relative w-full flex items-center justify-center mt-20">
      <p className="absolute text-white right-[308px] bottom-[435px] text-center text-lg">
        Copy my email <br />& let&apos;s talk!
      </p>
      <Image
        src={dashedArrow}
        alt="Dashed arrow"
        className="absolute right-72 bottom-[116px]"
      />
      <CopyButton />
      <p
        className={`${roboto_mono.className} w-[365px] text-justify text-primary/50`}
      >
        get in touch get in touch get in touch get in touch get in touch get in
        touch get in touch get in touch get in touch get in touch get in touch
        get in touch get in touch get in touch get in touch get in touch get in
        touch get in touch get in touch get in touch get in touch get in touch
        get in touch get in touch get in touch get in touch get in touch get in
        touch get in touch get in touch get in touch get in touch get in touch
      </p>
    </div>
  );
}
