import CtaButtons from "./CtaButtons";

const METRICS = [
	{ title: "projects done", value: "16" },
	{ title: "happy clients", value: "32" },
	{ title: "experience", value: "5+" },
	{ title: "retention rate", value: "98%" },
];

function Hero() {
	return (
		<div className="bg-linear-to-b from-white to-[#E6E7FF] py-10 sm:pt-20 sm:pb-20">
			<div className="mx-auto w-full max-w-270 space-y-20 px-4">
				<div className="space-y-12">
					<div className="space-y-6 text-center text-[#1C1C1E] max-w-245.75 mx-auto w-full">
						<h1 className="text-[32px] font-bold md:text-[64px] font-bricolage">
							Building Digital <span className="text-[#4A4EDD]">Products</span>{" "}
							That Work and Scale
						</h1>

						<p className="text-[18px] mx-auto max-w-200 w-full font-light md:text-[24px]">
							TinkerPal Hub crafts and builds mobile apps, web apps, and
							websites designed and engineered to solve real business problems
						</p>
					</div>

					<CtaButtons tag="hero" />
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 px-5 py-10 max-w-235 w-full mx-auto bg-[#F7F9FD] rounded-4xl">
					{METRICS.map((metric, i) => (
						<div
							key={i}
							className={`flex flex-col justify-center px-5 py-5 border-[#EDEDFC] border-r-2 border-b-2 nth-[2n]:border-r-0 nth-last-[-n+2]:border-b-0 md:border-b-0 md:border-r-0 md:border-l-2 md:nth-[4n+1]:border-l-0`}
						>
							<div
								className={`text-[#3B3EB1] text-[40px] font-bold lg:text-[56px] font-bricolage`}
							>
								{metric.value}
							</div>
							<div className="text-[18px] font-normal text-[#5E5F70] lg:text-[24px]">
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
