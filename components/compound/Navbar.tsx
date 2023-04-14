import Link from "next/link";
import { appLogo } from "../../constants/defaults.constant";
import { home } from "../../constants/pageLinks";

function Navbar() {
	return (
		<div className="p-5">
			<Link href={home}>
				<img src={appLogo} className="logo-sm" />
			</Link>
		</div>
	);
}

export default Navbar;
