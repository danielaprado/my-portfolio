import { skills } from "@/app/data/skills";
import sunset from "@/app/images/sunset.svg";
import { bakbak_one } from "@/app/utils/fonts";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="py-32" id="skills-section">
      <h2
        className={`${bakbak_one.className} custom-tertiary-stroke text-transparent sm:text-6xl text-4xl text-center`}
      >
        SKILLS
      </h2>
      <div className="relative h-[732px] ">
        <Image
          src={sunset}
          alt="Sunset"
          className="absolute left-1/2 top-32 transform -translate-x-1/2 w-[1204px]"
        />

        <div
          className={`${bakbak_one.className} absolute flex gap-10 left-1/2 top-[670px] items-center justify-center transform -translate-x-1/2 w-full`}
        >
          <div className="flex items-center gap-4 text-lg">
            {skills.map((skill) => (
              <p key={skill} className="relative group">
                <span className="hover:cursor-pointer">{skill}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-full group-hover:transition-all "></span>
              </p>
            ))}
          </div>
        </div>
        <hr className="absolute bottom-0 border-t-[2px] w-screen -left-24 border-[#EDA75E]" />
      </div>
    </section>
  );
}
