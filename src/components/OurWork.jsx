function OurWork() {
	return (
		<div className="bg-[#EDEDFC]" id="projects">
			<div className="mx-auto space-y-8 w-full max-w-300 px-5 py-10 pb-10 md:py-26 lg:px-10">
				<div className="mb-14 space-y-4 text-center">
					<p className="font-light text-[#3F3E3E] text-[18px] md:text-[20px]">
						Our Work
					</p>
					<h2 className="text-[32px] font-bold text-[#261447] md:text-[40px]">
						Featured Projects
					</h2>
				</div>

				<div className="grid grid-cols-1 md:auto-rows-min md:grid-cols-2 gap-8">
					<a
						href="https://bridge.liquids.fi/"
						target="_blank"
						className="max-w-136 w-full mx-auto bg-[#FFFFFF] p-4"
					>
						<img src="/Frame 1000002364 (1).svg" alt="" />
						<div className="space-y-4 rounded-sm bg-[#FFFFFF] px-4 pt-6 pb-8">
							<h3 className="text-[24px] lg:text-[28px] text-[#0B0F15] font-bold">
								LiquidsFi Web App
							</h3>
							<p className="text-[#393F48] lg:text-[18px] font-normal">
								LiquidsFi is an interoperability layer that bridges EVM chains
								and Soroban.
							</p>
						</div>
					</a>

					<a
						href="https://www.errandgo.app/"
						target="_blank"
						className="max-w-136 w-full mx-auto bg-[#FFFFFF] p-4"
					>
						<img src="/Frame 1000002364.svg" alt="" />
						<div className="space-y-4 rounded-sm bg-[#FFFFFF] px-4 pt-6 pb-8">
							<h3 className="text-[24px] lg:text-[28px] text-[#0B0F15] font-bold">
								ErrandGo Mobile App
							</h3>
							<p className="text-[#393F48] lg:text-[18px] font-normal">
								Connects people with helpers who can handle errands while
								helpers earn for running errands.
							</p>
						</div>
					</a>

					<a
						href="https://www.afroascend.co/"
						target="_blank"
						className="max-w-136 w-full mx-auto bg-[#FFFFFF] p-4"
					>
						<img src="/Frame 1000002364 (2).svg" alt="" />
						<div className="space-y-4 rounded-sm bg-[#FFFFFF] px-4 pt-6 pb-8">
							<h3 className="text-[24px] lg:text-[28px] text-[#0B0F15] font-bold">
								Afro Ascend
							</h3>
							<p className="text-[#393F48] lg:text-[18px] font-normal">
								Empowers African talents with resources, funding and
								international access to excel globally.
							</p>
						</div>
					</a>

					<a
						href="https://www.socket.fi/"
						target="_blank"
						className="max-w-136 w-full mx-auto bg-[#FFFFFF] p-4"
					>
						<img className="h-auto" src="/Frame 1000002364 (3).svg" alt="" />
						<div className="space-y-4 rounded-sm bg-[#FFFFFF] px-4 pt-6 pb-8">
							<h3 className="text-[24px] lg:text-[28px] text-[#0B0F15] font-bold">
								SocketFi
							</h3>
							<p className="text-[#393F48] lg:text-[18px] font-normal">
								Decentralized Web3 connector for social networks Smart wallet
								for Social Networks.
							</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default OurWork;
