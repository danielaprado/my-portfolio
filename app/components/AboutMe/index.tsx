import Image from "next/image";
import me from "@/app/images/me.png";
import { bakbak_one, poppins } from "@/app/utils/fonts";

export default function AboutMe() {
  return (
    <section
      id="about-me-section"
      className={`${poppins.className} h-screen flex justify-center items-center my-32 relative gap-10`}
    >
      <hr className="absolute border-t-[2px] top-[139px] -left-[100px] z-30 w-[25%]" />
      <hr className="absolute border-t-[2px] top-[139px] -left-[50px] z-30 w-[20%] rotate-90" />
      <hr className="absolute border-t-[2px] bottom-[139px] -left-[100px] z-30 w-[25%]" />
      <hr className="absolute border-t-[2px] bottom-[139px] -left-[50px] z-30 w-[20%] rotate-90" />
      <hr className="absolute border-t-[2px] top-[139px] -right-[100px] z-30 w-[25%]" />
      <hr className="absolute border-t-[2px] top-[139px] -right-[50px] z-30 w-[20%] rotate-90" />
      <hr className="absolute border-t-[2px] bottom-[139px] -right-[100px] z-30 w-[25%]" />
      <hr className="absolute border-t-[2px] bottom-[139px] -right-[50px] z-30 w-[20%] rotate-90" />

      <div className="absolute top-0 left-[250px]">
        <p className="text-white">From PT,</p>
        <p className={`${bakbak_one.className} text-secondary text-6xl`}>
          Daniela Prado
        </p>
      </div>

      <Image src={me} alt="Daniela" className="h-[400px] w-auto border-[2px]" />
      <div className="w-1/2 text-white text-lg flex flex-col justify-center gap-8 h-[400px]">
        <p className="px-6">
          I&apos;m{" "}
          <span className="text-xl text-primary">frontend developer</span> a
          always eager to learn new technologies and to put them into practical
          cases.
        </p>
        <hr className="border-t-[2px]" />
        <p className="px-6">
          I consider myself a creative person and I really enjoy to just play
          around and create my own content. <br />
          <br />
          So I thought:{" "}
          <span className="text-xl text-primary">
            &apos;why not go for it?&apos;
          </span>
        </p>
        <hr className="border-t-[2px]" />
        <p className="px-6">
          I have some experience when it comes to programming for the &apos;real
          world&apos;, but I want to do a little more than develop for others.{" "}
          <br />
          <br />
          So, explore my personal website and find out more about me!
        </p>
      </div>
    </section>
  );
}
