import { appName } from "../../../constants/defaults.constant";

export const ListItem = ({
	num,
	text,
	className,
}: {
	num: number;
	text: string;
	className: string;
}) => {
	return (
		<div
			className={
				className +
				" flex flex-row items-center space-x-3 rounded-3xl p-5 surface-bg lg:w-[26rem] ml-5 w-[90%] shadow-lg md:animate-bounce"
			}
		>
			<div className="rounded-full h-10 w-10 flex flex-row items-center justify-center text-white bg-[color:var(--primary)]">
				{num}
			</div>
			<div
				className="flex-1"
				dangerouslySetInnerHTML={{ __html: text }}
			/>
		</div>
	);
};

const MakeSomeCash = () => {
	return (
		<div className="relative lg:py-32 md:py-20 py-10 flex flex-col lg:h-[1000px] md:h-[1100px] h-[600px]">
			{/*lg:ml-auto lg:mr-56 mx-5*/}
			<div className="absolute xl:right-56 lg:right-36 left-[50%] translate-x-[-50%] lg:translate-x-0 z-[2] huge-text lg:w-5/12 md:w-1/2 text-center w-4/5">
				How to make some cash from{" "}
				<span className="text-highlight">{appName}.</span>
			</div>
			<div className="absolute z-[1] lg:top-32 md:top-48 top-24 md:px-20 px-10 flex flex-row">
				<div className="relative">
					<img src="/images/lady-on-phone-2.svg" alt="" />
					<ListItem
						num={1}
						text="Get a terminal manager and/or users to register with you as a referral"
						className="absolute lg:top-[30%] top-[40%] lg:left-3/4"
					/>
					<ListItem
						num={2}
						text="Get users to register with you as a referral"
						className="absolute lg:top-[50%] top-[70%] lg:left-[95%]"
					/>
					<ListItem
						num={3}
						text="Get a terminal manager to register with you as a referral"
						className="absolute lg:top-[70%] top-[95%] lg:left-3/4"
					/>
				</div>
			</div>
			<img
				src="/images/three-elipses.svg"
				className="absolute top-72 right-0"
			/>
		</div>
	);
};

export default MakeSomeCash;
