import LogoDark from "./LogoDark";
import LogoLight from "./LogoLight";

function Logo({ tag }) {
	return (
		<a href="/" className="flex items-center">
			{tag === "header" && <LogoDark />}

			{tag === "footer" && <LogoLight />}
		</a>
	);
}

export default Logo;
