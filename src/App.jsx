// import { useEffect } from "react";
// import { useLocation } from "react-router";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";
import Services from "./components/Services";

// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Testimonial from "@/components/Testimonial";
// import ExploreTask from "@/components/ExploreTask";
// import FeaturedCommunities from "@/components/FeaturedCommunities";
// import Metrics from "@/components/Metrics";
// import CreateWorkAndEarn from "@/components/CreateWorkAndEarn";

function HomePage() {
	// const location = useLocation();

	// useEffect(() => {
	// 	if (location.hash) {
	// 		const id = location.hash.replace("#", "");
	// 		const el = document.getElementById(id);
	// 		if (el) {
	// 			// Delay to ensure element is mounted
	// 			setTimeout(() => {
	// 				el.scrollIntoView({ behavior: "smooth" });
	// 			}, 200);
	// 		}
	// 	}
	// }, [location]);

	return (
		<>
			<div className="fixed right-0 left-0 z-50 px-5 pt-2 bg-white">
				<Header />
			</div>

			<Hero />

			<Services />

      <OurWork />

			<Footer />

			{/* <Metrics />

			<About />

			<ExploreTask />

			<CreateWorkAndEarn />

			<FeaturedCommunities />

			<Testimonial /> */}
		</>
	);
}

export default HomePage;
