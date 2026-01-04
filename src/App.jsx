import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";
import Services from "./components/Services";

function HomePage() {
	return (
		<>
			{/* <div className="fixed right-0 left-0 z-50 px-5 pt-2 bg-white border-2 border-red-500"> */}
			<Header />
			{/* </div> */}

			<Hero />

			<Services />

			<OurWork />

			<Footer />
		</>
	);
}

export default HomePage;
