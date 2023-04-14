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
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
