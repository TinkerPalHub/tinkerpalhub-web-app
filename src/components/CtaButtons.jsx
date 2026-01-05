function CtaButtons({ tag }) {
	return (
		<>
			{tag === "header" && (
				<>
					<div className="hidden items-center gap-4 font-normal text-base md:flex">
						<a
							href="#projects"
							className="bg-[#070816] text-[#EDEDFC] h-12 p-4 rounded-xl w-42 flex items-center justify-center"
						>
							View Projects
						</a>
						<a
							href="mailto:info@tinkerpal.com"
							className="bg-[#4A4EDD] text-[#EDEDFC] h-12 p-4 rounded-xl w-42 flex items-center justify-center"
						>
							Get In Touch
						</a>
					</div>
				</>
			)}

			{tag === "hero" && (
				<>
					<div className="flex items-center gap-4 font-normal text-base justify-center flex-wrap">
						<a
							href="#projects"
							className="bg-[#070816] text-[#EDEDFC] h-12 p-4 rounded-xl w-42 flex items-center justify-center"
						>
							View Projects
						</a>
						<a
							href="mailto:info@tinkerpal.com"
							className="bg-[#4A4EDD] text-[#EDEDFC] h-12 p-4 rounded-xl w-42 flex items-center justify-center"
						>
							Get In Touch
						</a>
					</div>
				</>
			)}
		</>
	);
}

export default CtaButtons;
