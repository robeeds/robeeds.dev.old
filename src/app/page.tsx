import Hero from "@/components/hero";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Technologies from "@/components/technologies";
import Contact from "@/components/contact";

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
