import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <main className="p-24">
      <Intro />
      <AboutMe />
    </main>
  );
}
