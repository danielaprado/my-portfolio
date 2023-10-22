import Title from "./Title";
import Sections from "./Sections";
import GetInTouch from "./GetInTouch";

export default function Intro() {
  return (
    <section className="flex flex-col">
      <Title />
      <Sections />
      <GetInTouch />
    </section>
  );
}
