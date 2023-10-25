export interface PortfolioProps {
  name: string;
  techStack?: string[];
  description?: string;
  links?: { label: string; href: string }[];
  isWIP?: boolean;
}

function urlDomain() {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  if (process.env.VERCEL_ENV === "production")
    return "https://danielaprado.vercel.app";
  else return process.env.VERCEL_URL;
}

export const portfolio: PortfolioProps[] = [
  {
    name: "This Website",
    techStack: ["NextJS", "TypeScript", "Tailwind CSS"],
    description:
      "My personal website is where you can get to now me better. The main purpose is to have a space where I can show my likes and my personal projects. In here I've decided to use one of my favorite frontend tech stack.",
    links: [
      {
        label: "Github Repo",
        href: "https://github.com/danielaprado/my-portfolio",
      },
      {
        label: "Website",
        href: "https://danielaprado.vercel.app/",
      },
    ],
  },
  {
    name: "ACOA",
    techStack: [
      "ReactJS",
      "TypeScript",
      "NodeJS",
      "Express",
      "MongoDB",
      "Figma",
    ],
    description:
      "My Master Thesis. This project consists of having a website where artists can exhibit their artworks online and where they can explain and show their thinking process, in a chronological way.",
    links: [{ label: "Screen recording", href: `${urlDomain()}/acoa.mp4` }],
  },
  {
    name: "D'Almic",
    techStack: ["Figma"],
    description:
      "The best ideas come after lunch 🍽️... This project was done with Catarina Matos, a very good friend of mine (go check out her stuff!). It was thought to be a illustration project and in the future we want to have a apparel website so we can sell our designs.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/dalmicbrand/" },
    ],
  },
  {
    name: "Bathstage® Music",
    techStack: ["ReactJS", "TypeScript", "Redux"],
    description:
      "This project was done on a freelance context. The website had the purpose of showing videos of singers singing in different bathrooms.",
    links: [
      { label: "Website", href: "https://bathstagemusic.com" },
      {
        label: "Screen recording",
        href: `${urlDomain()}/bathstage.mp4`,
      },
    ],
  },
  {
    name: "Twitter clone",
    description: "In a near future. This project is a clone of Twitter.",
    isWIP: true,
  },
];
