const METRICS = [
	{ title: "projects done", value: "16" },
	{ title: "happy clients", value: "32" },
	{ title: "experience", value: "5+" },
	{ title: "retention rate", value: "98%" },
];

function Hero() {
	return (
		<div className="bg-linear-to-b from-white to-[#E6E7FF] pt-40 pb-30">
			<div className="mx-auto w-full max-w-300 space-y-14 px-5">
				<div className="space-y-12">
					<div className="space-y-6 text-center text-[#1C1C1E] max-w-245.75 mx-auto w-full">
						<h1 className="text-[36px] font-bold md:text-[64px] font-bricolage">
							Building Digital <span className="text-[#4A4EDD]">Products</span>{" "}
							That Work and Scale
						</h1>

						<p className="mx-auto max-w-200 w-full font-light md:text-[24px]">
							TinkerPal Hub crafts and builds mobile apps, web apps, and
							websites designed and engineered to solve real business problems
						</p>
					</div>

					<div className="flex items-center gap-4 font-normal text-base justify-center flex-wrap">
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
				</div>

				<div className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:px-10 [@media(max-width:379px)]:grid-cols-1">
					{METRICS.map((metric, i) => (
						<div
							key={i}
							className={`flex flex-col justify-center rounded-lg bg-[#F7F9FD] px-5 py-10 [@media(max-width:379px)]:items-center ${
								metric.title === "paid out" &&
								"sm:order-4 [@media(max-width:379px)]:order-4"
							}`}
						>
							<div
								className={`${"text-[#3B3EB1]"} text-[32px] font-normal lg:text-[48px] font-bricolage`}
							>
								{metric.value}
							</div>
							<div className="text-[15px] text-[#636366] lg:text-[20px]">
								{metric.title}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Hero;
