import T from "../../simple/T";

function SchoolCommerce() {
	return (
		<div className="relative lg:h-[650px] md:h-[400px] h-[300px] flex md:flex-col flex-col-reverse radius-lg overflow-hidden md:w-[90%] md:mx-auto mx-5">
			<div className="flex md:flex-row flex-col-reverse md:absolute relative w-full h-full z-[1]">
				<div className="mt-auto md:static absolute bottom-0 basis-6/12">
					<img
						src="/images/lady-on-phone-1.svg"
						alt="lady on phone"
					/>
				</div>
				<div />
			</div>
			<div className="bg-[color:var(--primary)] radius-lg lg:h-4/5 h-full lg:mt-40 absolute w-full flex flex-row">
				<div className="flex-[0.8]" />
				<div className="flex-1 flex flex-col md:static absolute bottom-0 xl:pr-40 md:pr-10 xl:pt-24 p-5 z-[2]">
					<div className="huge-text text-white 2xl:mt-auto">
						<span className="text-highlight">School commerce</span>{" "}
						has never been more{" "}
						<span className="text-highlight">interesting</span>.
					</div>
					<p className="md:pb-6 pt-3 xl:mr-20 text-white 2xl:mb-auto">
						<T>
							Come with us on this journey of financial
							lubrication and freedom for the cost of absolutely
							nothing! Yeah, Your presence is that valuable.
						</T>
					</p>
				</div>
			</div>
		</div>
	);
}

export default SchoolCommerce;
