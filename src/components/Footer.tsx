import { Fragment } from "react";
import { FaFacebook } from "react-icons/fa";
import { PiTiktokLogoFill } from "react-icons/pi";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import Logo from "./Logo";

export const FOOTER_LINKS = [
	{ href: "https://www.tiktok.com", icon: PiTiktokLogoFill },
	{ href: "https://www.x.com", icon: RiTwitterXFill },
	{
		href: "https://www.instagram.com",
		icon: RiInstagramFill,
	},
	{ href: "https://www.facebook.com", icon: FaFacebook },
];

export default function Footer() {
	return (
		<footer
			className="pt-25 pb-12.5 max-w-360 mx-auto w-full bg-[#070816] px-4"
			id="faqs"
		>
			<div className="max-w-280 w-full mx-auto text-[#00072D] animate-FadeIn">
				<div className="flex flex-col justify-between gap-12 sm:flex-row sm:items-center">
					<div className="flex flex-1 flex-col gap-8">
						<div className="w-full max-w-120.75 space-y-1">
							{/* <Logo /> */}
							<a
								href="/"
								onClick={(e) => {
									e.preventDefault();

									// navigate("/");
									window.scrollTo({
										top: 0,
									});
								}}
								className="flex gap-1"
							>
								<img src="/Frame (2).svg" alt="" />
								<img src="/Vector (2).svg" alt="" />
							</a>
							<p className="text-[18px] font-light text-[#F8F3FF]">
								tinkerpal@gmail.com
							</p>
							<p className="text-[18px] font-light text-[#F8F3FF]">
								+12384652670
							</p>
						</div>
					</div>

					<div className="text-[#F8F3FF] space-y-5">
						<div className="text-[#F8F3FF] flex gap-10 sm:justify-end">
							<a href="/terms-of-use">Services</a>
							<a href="/privacy-policy">Projects</a>
						</div>

						<div className="flex flex-wrap w-fit gap-5 sm:ml-auto">
							{FOOTER_LINKS.map((link, i) => (
								<Fragment key={i}>
									<a
										className="font-normal text-[#F8F3FF] flex items-center gap-2"
										href={link.href}
									>
										<link.icon className="text-2xl" />
									</a>
								</Fragment>
							))}
						</div>
					</div>
				</div>

				<p className="text-center text-white mt-4">
					© {new Date().getFullYear()} ErrandGo. All rights reserved
				</p>
			</div>
		</footer>
	);
}
