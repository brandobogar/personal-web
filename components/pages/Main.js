import Hero from "../container/Hero";
import About from "../container/About";
import Project from "../container/Projects";
import Techs from "../container/Techs";
import Footer from "../container/Footer";
import Navbar from "../elements/Navbar";

export const metadata = {
  title: "My Page Title",
};
export default function Main() {
  return (
    <>
      <Navbar />

      <div className="divide-y-[1px] divide-opacity-50 divide-slate-50 dark:bg-my-bg-dark dark:text-my-dark bg-my-bg-light text-my-text-light dark:divide-my-text-200 w-full">
        <Hero />

        <About />
        <Project />
        <Techs />
        <Footer />
      </div>
    </>
  );
}
