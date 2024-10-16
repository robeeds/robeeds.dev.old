import Hero from "./ui/hero";
import About from "./ui/about";
import Portfolio from "./ui/portfolio";
import Technologies from "./ui/technologies";
import Contact from "./ui/contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Portfolio />
      <Technologies />
      <Contact />
    </div>
  );
}
