import Image from "next/image";
import me from "@/app/images/me.png";
import { bakbak_one, poppins } from "@/app/utils/fonts";

export default function AboutMe() {
  return (
    <section
      id="about-me-section"
      className={`${poppins.className} flex max-lg:flex-col lg:justify-center items-center my-32 relative `}
    >
      <div className="flex flex-col sm:gap-20 gap-10">
        <div className="max-lg:hidden">
          <hr className="absolute border-t-[2px] top-[0px] -left-[100px] z-30 w-[100px] xl:w-[15%]" />
          <hr className="absolute border-t-[2px] top-[0px] -left-[80px] z-30 w-[80px] xl:w-[10%] rotate-90" />
          <hr className="absolute border-t-[2px] -bottom-[75px] -left-[100px] z-30 w-[100px] xl:w-[15%]" />
          <hr className="absolute border-t-[2px] -bottom-[75px] -left-[80px] z-30 w-[80px] xl:w-[10%] rotate-90" />
          <hr className="absolute border-t-[2px] top-[0px] -right-[100px] z-30 w-[100px] xl:w-[15%]" />
          <hr className="absolute border-t-[2px] top-[0px] -right-[80px] z-30 w-[80px] xl:w-[10%] rotate-90" />
          <hr className="absolute border-t-[2px] -bottom-[75px] -right-[100px] z-30 w-[100px] xl:w-[15%]" />
          <hr className="absolute border-t-[2px] -bottom-[75px] -right-[80px] z-30 w-[80px] xl:w-[10%] rotate-90" />{" "}
        </div>
        <div className="flex gap-10 items-center max-lg:flex-col-reverse">
          <Image
            src={me}
            alt="Daniela"
            className="lg:h-[400px] lg:w-auto border-[2px] sm:w-[400px] sm:h-auto"
          />
          <div className="">
            <p className="text-white">From PT,</p>
            <h2
              className={`${bakbak_one.className} text-secondary lg:text-6xl text-4xl sm:text-5xl`}
            >
              Daniela Prado
            </h2>
          </div>
        </div>
        <div className="text-white sm:text-lg flex flex-col justify-center gap-8 ">
          <p className="px-6">
            I&apos;m{" "}
            <span className="sm:text-xl text-lg text-primary">
              frontend developer
            </span>{" "}
            a always eager to learn new technologies and to put them into
            practical cases.
          </p>
          <hr className="border-t-[2px]" />
          <p className="px-6">
            I consider myself a creative person and I really enjoy to just play
            around and create my own content. <br />
            <br />
            So I thought:{" "}
            <span className="sm:text-xl text-lg text-primary">
              &apos;why not go for it?&apos;
            </span>
          </p>
          <hr className="border-t-[2px]" />
          <p className="px-6">
            I have some experience when it comes to programming for the
            &apos;real world&apos;, but I want to do a little more than develop
            for others. <br />
            <br />
            So, explore my personal website and find out more about me!
          </p>
        </div>
      </div>
    </section>
  );
}
