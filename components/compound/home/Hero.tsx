import { signUp } from "../../../constants/pageLinks";
import { PrimaryButton } from "../../simple/Buttons";
import T from "../../simple/T";

function Hero() {
	return (
		<div className="lg:h-[500px] md:h-[400px] h-[380px]">
			<div className="flex md:flex-row justify-center flex-col xl:px-44 lg:px-24 sm:px-10 px-5 h-[60vh]">
				<div className="flex-1 md:my-auto sm:my-20 my-10">
					<div className="huge-text">
						<span className="text-highlight">Schooling </span>
						is hard, we
						<span className="text-highlight"> understand</span>.
					</div>
					<p className="pb-6 pt-3 ">
						<T>
							We&apos;re here to make it easier. Now you have more
							time to actually learn and have fun while making
							passive income at the same time! Scroll further to
							see more or...
						</T>
					</p>
					<PrimaryButton href={signUp}>Get Started</PrimaryButton>
				</div>
				<div className="flex-1 lg:flex flex-row justify-center relative hidden">
					<img
						src="/images/phone-mockup.svg"
						alt="Phone displaying wallet card."
						className="absolute left-[50%] translate-x-[-50%] z-10 top-[-10vh] h-[700px]"
					/>
					<div className="absolute top-[35vh] left-[-200px] md:w-[904px] md:h-[904px] w-[200px] h-[200px] surface-bg rounded-full " />
				</div>
			</div>
		</div>
	);
}

export default Hero;
