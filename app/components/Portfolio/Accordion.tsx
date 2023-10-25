"use client";

import { portfolio } from "@/app/data/portfolio";
import Item from "./Item";

export default function Accordion() {
  return (
    <ul className="mt-16">
      {portfolio.map((project) => (
        <Item key={project.name} project={project} />
      ))}
    </ul>
  );
}
