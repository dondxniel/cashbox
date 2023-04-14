import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
	facebookLink,
	instagramLink,
	mobileNumber,
	twitterLink,
} from "../../../../constants/contact.constant";
import { GhostBtn } from "../../../simple/Buttons";

function TerminalManagerSignUpForm() {
	return (
		<div className="grid grid-cols-1 gap-5">
			<p>
				Due to how delicate the process for signing up terminal mangers
				is, you’ll have to contact us directly to sign up as a terminal
				manager
			</p>
			<p>
				You can contact us on phone by calling <b>{mobileNumber}</b> or
				through the following medium
			</p>
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
	);
}

export default TerminalManagerSignUpForm;
