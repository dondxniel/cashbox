import { useEffect, useState } from "react";
import {
	appLogo,
	appName,
	defaultDescription,
} from "../../../constants/defaults.constant";
import { AppLayoutProps } from "../../../interfaces/layouts.interface";
import Sidebar from "../../compound/app/Sidebar";
import CustomHead from "../../simple/CustomHead";
import ToggleSidebar from "../../simple/ToggleSidebar";
function AppLayout({
	children,
	title = appName,
	description = defaultDescription,
	icon = appLogo,
}: AppLayoutProps) {
	const [innerHeight, setInnerHeight] = useState<number>(0);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setInnerHeight(window.innerHeight);
			window.addEventListener("resize", () =>
				setInnerHeight(window.innerHeight)
			);
			if (typeof window !== "undefined")
				return () => {
					window.removeEventListener("resize", () =>
						setInnerHeight(window.innerHeight)
					);
				};
		}
	});
	const h = innerHeight;
	return (
		<>
			<CustomHead title={title} description={description} icon={icon} />
			<div className="absolute top-6 left-4 z-[2] ">
				<ToggleSidebar />
			</div>
			<div
				className={`flex flex-row justify-stretch w-screen md:p-3 p-0 lg:space-x-5 md:space-x-3 under-bg text-normal  font-base md:font-light md:text-base text-sm`}
				style={{
					height: innerHeight,
				}}
			>
				<Sidebar />
				<div className="flex-1 flex flex-col space-y-3 min-h-0">
					<div className="flex-1 flex flex-row min-h-0 lg:space-x-5 md:space-x-3 space-x-0 transition-all duration-300 relative">
						{children}
					</div>
				</div>
			</div>
		</>
	);
}

export default AppLayout;
