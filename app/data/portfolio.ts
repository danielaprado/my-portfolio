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
      "My personal website is where you can get to know me better. The main purpose is to have a space where I can show my tastes and my personal projects. Here I decided to use one of my favorite frontend technologies.",
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
      "My master's thesis. This project consists of a website where artists can exhibit their works of art online and where they can explain and show their thought process, chronologically.",
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
      "This project was carried out on a freelance basis. The website aimed to show videos of singers singing in different bathrooms.",
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
    description: "In the near future. This project is a Twitter clone.",
    isWIP: true,
  },
];
