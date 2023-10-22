import { roboto_mono } from "@/app/utils/fonts";
import dashedArrow from "@/app/images/dash_arrow.svg";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <div className="relative w-full flex items-center justify-center mt-20">
      <p className="absolute text-white right-60 bottom-[415px] text-center text-lg">
        Copy my email <br />& let&apos;s talk!
      </p>
      <Image
        src={dashedArrow}
        alt="Dashed arrow"
        className="absolute right-52 bottom-24"
      />
      <button className="relative">
        <div className="absolute left-0 -top-8 w-[365px] py-4 bg-background text-3xl border-dashed border-white border text-white z-20">
          GET IN TOUCH
        </div>
        <div className="w-[365px] bg-primary h-[56px] left-[14px] absolute z-0" />
      </button>
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
