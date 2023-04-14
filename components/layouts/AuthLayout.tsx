import {
	appLogo,
	appName,
	defaultDescription,
} from "../../constants/defaults.constant";
import { PageLayoutProps } from "../../interfaces/layouts.interface";
import Footer from "../compound/Footer";
import Navbar from "../compound/Navbar";
import CustomHead from "../simple/CustomHead";

function Layout({
	children,
	title = appName,
	description = defaultDescription,
	icon = appLogo,
}: PageLayoutProps) {
	return (
		<div className="under-bg text-normal font-light md:text-base text-sm min-h-screen overflow-x-hidden">
			<CustomHead title={title} description={description} icon={icon} />
			<Navbar />
			<div className="min-h-[400px] px-5 pt-10 pb-20 flex flex-col justify-center items-center">
				<div className="surface-bg transition-all duration-300 py-16 px-7 lg:w-4/12 md:w-3/5 w-full radius-lg">
					{children}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
