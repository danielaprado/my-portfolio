import { sections } from "@/app/data/sections";
import clsx from "clsx";
import Link from "next/link";

export default function Sections() {
  return (
    <div className="flex flex-col sm:text-5xl text-xl mt-20 sm:gap-10 gap-5 items-center">
      {sections.map(({ name, style, id }) => (
        <Link key={name} href={id}>
          <div className="group flex flex-col items-center relative hover:cursor-pointer">
            <span
              className={clsx(
                "z-10",
                style === "fill"
                  ? "text-tertiary"
                  : "custom-tertiary-stroke text-background"
              )}
            >
              {name}
            </span>
            <div className="absolute group-hover:flex group-hover:flex-col group-hover:gap-1 group-hover:absolute sm:group-hover:top-5 group-hover:top-[10px] max-sm:top-0 group-hover:z-0 group-hover:w-[calc(100%+2rem)]">
              <hr className="border-secondary" />
              <hr className="border-secondary" />
              <hr className="border-secondary" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
