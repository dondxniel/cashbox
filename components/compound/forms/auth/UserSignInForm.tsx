import { useRef } from "react";
import { PrimaryButton } from "../../../simple/Buttons";
import Input from "../../../simple/Input";

function UserSignUpForm() {
	const usernameRef = useRef(null);
	const passwordRef = useRef(null);
	return (
		<form>
			<Input label="Username" inputRef={usernameRef} tag="@" />
			<Input label="Password" inputRef={passwordRef} type="password" />
			<div className="my-7 flex flex-col">
				<PrimaryButton dense>Sign in</PrimaryButton>
			</div>
		</form>
	);
}

export default UserSignUpForm;
