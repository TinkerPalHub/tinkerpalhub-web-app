import {
	PiCardsThreeFill,
	PiDeviceMobileFill,
	PiLaptopFill,
} from "react-icons/pi";

const SERVICES = [
	{
		title: "Conversion-Focused Websites",
		description:
			"High-performance websites built to communicate clearly, load fast, and convert visitors into customers.",
		icon: PiLaptopFill,
	},
	{
		title: "User-Centric Mobile Applications",
		description:
			"Intuitive iOS and Android apps crafted for real-world use, seamless interactions, and retain users.",
		icon: PiDeviceMobileFill,
	},
	{
		title: "Scalable Web Applications",
		description:
			"Scalable web applications designed to power workflows, manage data, and grow with your business.",
		icon: PiCardsThreeFill,
	},
];

function Services() {
	return (
		<div className="bg-white py-10 pb-10 md:py-26" id="services">
			<div className="mb-14 space-y-4 text-center">
				<p className="font-light text-[#3F3E3E] text-[18px] md:text-[20px]">
					What We Do
				</p>
				<h2 className="text-[32px] font-bold text-[#261447] md:text-[40px]">
					Our Services
				</h2>
			</div>
			<div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-300 px-5 lg:px-10">
				{SERVICES.map((service, index) => (
					<div key={index} className="rounded-lg p-8 bg-[#F5F8FF] space-y-6">
						<div className="rounded-full w-fit bg-white p-3 mx-auto">
							{service.icon && (
								<service.icon
									className={`inline-block text-[30px] text-[#4A4EDD] mx-auto`}
								/>
							)}
						</div>

						<div className="space-y-3">
							<p className="text-[#261447] text-[20px] font-bold text-center">
								{service.title}
							</p>
							<p className="font-light text-[#3F3E3E] text-[18px] text-center">
								{service.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Services;
