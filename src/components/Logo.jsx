// import { Link, useNavigate } from "react-router";

function Logo() {
	// const navigate = useNavigate();

	return (
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
			<img src="/logo.svg" alt="" />
			<img src="/tinker-pal.svg" alt="" className="hidden md:block" />
		</a>
	);
}

export default Logo;
