import { useRef } from "react";
import { PrimaryButton } from "../../../simple/Buttons";
import Input from "../../../simple/Input";

function InSystemTransferForm() {
	const usernameRef = useRef(null);
	const amountRef = useRef(null);
	return (
		<div className="flex flex-col space-y-1">
			<Input label="Username" inputRef={usernameRef} tag="@" />
			<Input
				label="Amount"
				inputRef={amountRef}
				tag="₦"
				type="number"
				step={0.1}
			/>
			<div
				className="flex flex-row justify-center"
				style={{ marginTop: 25, marginBottom: 25 }}
			>
				<PrimaryButton dense>Transfer</PrimaryButton>
			</div>
		</div>
	);
}

export default InSystemTransferForm;
