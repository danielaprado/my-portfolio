import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Banner from "./components/general/Banner";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="sm:px-24 px-10 py-24">
        <Intro />
        <AboutMe />
        <Skills />
        <Portfolio />
      </div>
    </main>
  );
}
