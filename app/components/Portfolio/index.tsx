import { bakbak_one } from "@/app/utils/fonts";
import Accordion from "./Accordion";

export default function Portfolio() {
  return (
    <section className="mt-32" id="portfolio-section">
      <h2
        className={`${bakbak_one.className} text-secondary sm:text-6xl text-4xl text-center`}
      >
        PORTFOLIO
      </h2>
      <Accordion />
    </section>
  );
}
