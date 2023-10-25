import githubIcon from "@/app/images/github.svg";
import linkedin from "@/app/images/linkedin.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div
        id="socials-section"
        className="flex items-center justify-center gap-8"
      >
        <a
          href="https://github.com/danielaprado"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my Github page"
        >
          <Image src={githubIcon} alt="Github" width={32} height={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/daniela-prado/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my LinkedIn page"
        >
          <Image src={linkedin} alt="LinkedIn" width={32} height={32} />
        </a>
      </div>
      <p className="text-tertiary text-center my-6">
        © 2023 Daniela Prado. All rights reserved.
      </p>
    </footer>
  );
}
