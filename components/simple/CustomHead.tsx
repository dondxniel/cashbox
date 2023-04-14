import Head from "next/head";
import {
	appLogo,
	appName,
	defaultDescription,
} from "../../constants/defaults.constant";
import { CustomHeadProps } from "../../interfaces/simple.interface";

function CustomHead({
	title = appName,
	description = defaultDescription,
	icon = appLogo,
}: CustomHeadProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href={icon} />
		</Head>
	);
}

export default CustomHead;
