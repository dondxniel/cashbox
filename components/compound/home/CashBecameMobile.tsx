import T from "../../simple/T";

function CashBecameMobile() {
	return (
		<div className="relative pt-20">
			<img
				src="/images/half-green-circle.svg"
				alt="half green circle"
				className="absolute top-28"
			/>
			<div className="relative lg:h-[600px] md:h-[400px] h-[300px] flex md:flex-col flex-col-reverse radius-lg overflow-hidden md:w-[90%] md:mx-auto mx-5">
				<div className="flex md:flex-row flex-col-reverse md:absolute relative w-full h-full z-[1]">
					<div className="flex-1" />
					<div className="mt-auto md:static absolute bottom-0 flex-1">
						<img
							src="/images/delivery-guy.svg"
							alt="lady on phone"
						/>
					</div>
				</div>
				<div className="bg-[color:var(--primary-alpha-11)] overflow-hidden radius-lg lg:h-4/5 h-full lg:mt-40 absolute w-full flex flex-row">
					<div className="flex-1 flex flex-col justify-center md:static absolute bottom-0 md:surface-bg md:rounded-none radius-lg md:text-normal h-full xl:px-24 md:px-12 p-5 z-[2] ">
						<div className="huge-text 2xl:mt-auto">
							<span className="text-highlight">Cash</span> just
							became{" "}
							<span className="text-highlight">mobile</span>.
						</div>
						<p className="md:pb-6 pt-3 xl:mr-20 2xl:mb-auto ">
							<T>
								Get access to cash anywhere you are within your
								school campus from your device. Yes, you can now
								literally order cash. No need to make that
								gruelling comute to the POS shop anymore. Let
								the POS shop come to you.
							</T>
						</p>
					</div>
					<div className="flex-1" />
				</div>
			</div>
		</div>
	);
}

export default CashBecameMobile;
