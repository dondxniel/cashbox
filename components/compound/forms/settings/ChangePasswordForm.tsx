import { useRef } from "react";
import { PrimaryButton } from "../../../simple/Buttons";
import Input from "../../../simple/Input";

function ChangePasswordForm() {
	const oldPasswordRef = useRef(null);
	const newPasswordRef = useRef(null);
	const confirmNewPasswordRef = useRef(null);

	return (
		<div className="flex flex-col ">
			<Input inputRef={oldPasswordRef} label="Enter Old Password" />
			<Input inputRef={newPasswordRef} label="Enter New Password" />
			<Input
				inputRef={confirmNewPasswordRef}
				label="Confirm New Password"
			/>

			<div
				className="flex flex-row lg:justify-start justify-center"
				style={{ marginTop: 30, marginBottom: 30 }}
			>
				<PrimaryButton dense>Change</PrimaryButton>
			</div>
		</div>
	);
}

export default ChangePasswordForm;
