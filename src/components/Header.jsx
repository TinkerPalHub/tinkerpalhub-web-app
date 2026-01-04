import { PiEnvelopeFill, PiSquaresFourFill } from "react-icons/pi";
import Logo from "./Logo";
import LogoDark from "./LogoDark";
import CtaButtons from "./CtaButtons";

function Header() {
	return (
		<header className="mx-auto flex w-full max-w-280 items-center justify-between px-4 py-4">
			<Logo tag="header" />

			<CtaButtons tag="header" />

			<div className="flex items-center gap-4 lg:hidden">
				<a href="#projects" className="bg-[#EDEDFC] p-2 rounded-xl h-12">
					<PiSquaresFourFill className="text-[30px]" />
				</a>
				<a
					href="mailto:info@tinkerpal.com"
					className="bg-[#EDEDFC] p-2 rounded-xl h-12"
				>
					<PiEnvelopeFill className="text-[#4A4EDD] text-[30px]" />
				</a>
			</div>
		</header>
	);
}

export default Header;
