import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Banner from "./components/geral/Banner";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="sm:px-24 px-10 py-24">
        <Intro />
        <AboutMe />
        <Skills />
      </div>
    </main>
  );
}
