// import { LANDING_NAV_LINKS } from "@/lib/constants";
// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router";
// import AuthButtons from "../AuthButtons";
// import MobileNavigation from "../MobileNavigation";
// import Logo from "../Logo";
// import { useAuth } from "@/hooks/useAuth";
// import { Button } from "../ui/button";

import { PiEnvelopeFill, PiSquaresFourFill } from "react-icons/pi";
import Logo from "./Logo";

function Header() {
	// const [sheetIsOpen, setSheetIsOpen] = useState(false);
	// const { isAuthenticated } = useAuth();
	// const navigate = useNavigate();

	return (
		<header className="mx-auto flex w-full max-w-280 items-center justify-between px-6 py-4">
			<Logo />

			<div className="hidden items-center gap-4 font-normal text-base md:flex">
				<a
					href="/"
					className="bg-[#070816] text-[#EDEDFC] p-4 rounded-xl w-42 text-center"
				>
					View Projects
				</a>
				<button className="bg-[#4A4EDD] text-[#EDEDFC] p-4 rounded-xl w-42 text-center">
					Get In Touch
				</button>
			</div>

			<div className="flex items-center gap-4 font-normal text-base md:hidden">
				<a href="/" className="bg-[#EDEDFC] p-2 rounded-xl">
					<PiSquaresFourFill className="text-[30px]" />
				</a>
				<button className="bg-[#EDEDFC] p-2 rounded-xl">
					<PiEnvelopeFill className="text-[#4A4EDD] text-[30px]" />
				</button>
			</div>
		</header>
	);
}

export default Header;
