import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
	facebookLink,
	instagramLink,
	mobileNumber,
	twitterLink,
} from "../../constants/contact.constant";
import { GhostBtn } from "../simple/Buttons";

function Footer() {
	return (
		<div className="relative bg-[color:var(--primary)] h-[500px] text-white flex flex-row justify-center">
			<div className="flex flex-col px-5 space-y-10 justify-center items-center">
				<img src="/app-logo.svg" className="h-20 w-20" />
				<div className="text-center">
					You can reach us through phone calls or whatsapp on
					<br />
					<span className="font-bold">{mobileNumber}</span>
				</div>
				<div className="flex flex-row space-x-2">
					<a href={instagramLink} target="_blank">
						<GhostBtn>
							<FaInstagram size={22} />
						</GhostBtn>
					</a>
					<a href={twitterLink} target="_blank">
						<GhostBtn>
							<FaTwitter size={22} />
						</GhostBtn>
					</a>
					<a href={facebookLink} target="_blank">
						<GhostBtn>
							<FaFacebook size={22} />
						</GhostBtn>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
