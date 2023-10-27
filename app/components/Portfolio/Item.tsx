"use client";

import { PortfolioProps } from "@/app/data/portfolio";
import linkIcon from "@/app/images/link.svg";
import Image from "next/image";
import { useState } from "react";

export default function Item({ project }: { project: PortfolioProps }) {
  const [toggleContent, setToggleContent] = useState<boolean>(false);
  return (
    <li
      key={project.name}
      className="flex flex-col"
      onClick={() => setToggleContent(!toggleContent)}
    >
      <div className="flex justify-between mx-3">
        <div className="flex items-center gap-2 mb-3">
          {project?.isWIP && (
            <span className="text-secondary text-lg">[WIP]</span>
          )}
          <span className="text-white text-4xl">{project.name}</span>
        </div>
        {/* <Image
          src={plusIcon}
          alt="Open for more"
          width={24}
          height={24}
          className={"group-hover:rotate-45"}
        /> */}
      </div>
      <div className={"px-3 pb-2 "}>
        <div className="flex flex-wrap text-tertiary/90 text-lg mb-2">
          {project?.techStack?.map((tech) => (
            <span key={tech} className="pr-3">
              {tech}
            </span>
          ))}
        </div>

        {project.name !== "D'Almic" ? (
          <p className="text-tertiary/60 mb-2">{project?.description}</p>
        ) : (
          <p className="text-tertiary/60 mb-2">
            The best ideas come after lunch 🍽️... This project was done with{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://behance.net/cpmatos"
              aria-label="Visit Catarina Matos' behance page"
              className="text-primary hover:underline"
            >
              Catarina P. Matos
            </a>
            , a very good friend of mine (go check out her stuff!). It&apos;s
            meant to be an illustration project and in the future we want to
            have a clothing website so we can sell our designs.
          </p>
        )}
        <div className="flex gap-3">
          {project?.links?.map((link) => (
            <div
              key={link.label}
              className="flex items-center justify-center gap-2 pr-3"
            >
              <Image src={linkIcon} alt={link.label} />
              <a
                target="_blank"
                rel="noreferrer"
                href={link.href}
                aria-label={`Visit the ${link.label}`}
                className="text-primary hover:underline"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-t-[2px] w-full my-7" />
    </li>
  );
}
