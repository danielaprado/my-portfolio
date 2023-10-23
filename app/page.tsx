import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";
import Banner from "./components/geral/Banner";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="p-24">
        <Intro />
        <AboutMe />
      </div>
    </main>
  );
}
