import { sections } from "@/app/data/sections";
import clsx from "clsx";

export default function Sections() {
  return (
    <div className="flex flex-col text-5xl mt-20 gap-10 items-center">
      {sections.map(({ name, style }) => (
        <div
          key={name}
          className="group flex flex-col items-center relative hover:cursor-pointer"
        >
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
          <div className="hidden group-hover:flex group-hover:flex-col group-hover:gap-1 group-hover:absolute group-hover:top-5 group-hover:z-0 group-hover:w-[calc(100%+2rem)]">
            <hr className="border-secondary" />
            <hr className="border-secondary" />
            <hr className="border-secondary" />
          </div>
        </div>
      ))}
    </div>
  );
}
