import LogoDark from "./LogoDark";
import LogoLight from "./LogoLight";

function Logo({ tag }) {
	return (
		<a href="/" className="flex items-center">
			{tag === "header" && (
				<>
					<LogoDark />
					{/* <img
						src="/tinker-pal.svg"
						alt=""
						className="hidden md:block h-[19.69px]"
					/> */}
				</>
			)}

			{tag === "footer" && (
				<>
					<LogoLight />
					{/* <img src="/tinker-pal-light.svg" alt="" className="h-[19.69px]" /> */}
				</>
			)}
		</a>
	);
}

export default Logo;
