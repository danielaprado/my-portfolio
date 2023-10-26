import { skills } from "@/app/data/skills";
import sunset from "@/app/images/sunset.svg";
import { bakbak_one } from "@/app/utils/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Skills() {
  return (
    <section className="lg:pt-32" id="skills-section">
      <h2
        className={`${bakbak_one.className} custom-tertiary-stroke text-transparent sm:text-6xl text-4xl text-center`}
      >
        SKILLS
      </h2>
      <div className="relative lg:h-[732px] md:h-[632px] sm:h-[532px] max-sm:h-[350px]">
        <Image
          src={sunset}
          alt="Sunset"
          className="absolute left-1/2 top-32 transform -translate-x-1/2 lg:h-[600px] md:h-[520px] sm:h-[420px] h-[239px] w-auto"
          // width={1200}
        />

        <div
          className={`${bakbak_one.className} absolute flex gap-10 left-1/2 lg:top-[685px] items-center justify-center transform -translate-x-1/2 w-full max-lg:my-[7%]`}
        >
          <div className="flex items-center xl:gap-4 gap-2 xl:text-lg text-sm max-lg:text-white max-lg:justify-center max-lg:gap-4 max-lg:flex-wrap max-lg:w-full">
            {skills.map((skill) => (
              <a
                target="_blank"
                rel="noreferrer"
                aria-label={`Check out more about ${skill.name}`}
                key={skill.name}
                href={skill.href}
              >
                <p className="relative group">
                  <span className="hover:cursor-pointer">{skill.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-full group-hover:transition-all "></span>
                </p>
              </a>
            ))}
          </div>
        </div>
        <hr className="absolute lg:bottom-1 border-t-[2px] w-screen sm:-left-24 -left-[40px] border-[#EDA75E] max-lg:-bottom-[18px]" />
      </div>
    </section>
  );
}
