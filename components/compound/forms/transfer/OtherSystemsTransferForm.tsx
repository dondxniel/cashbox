import { useContext, useRef, useState } from "react";
import { DialogContext } from "../../../../context/Dialog.context";
import { PrimaryButton } from "../../../simple/Buttons";
import Input, { SelectInput } from "../../../simple/Input";

function OtherSystemsTransferForm() {
	const { showDialog } = useContext(DialogContext);

	const accountNoRef = useRef(null);
	const amountRef = useRef(null);
	const [bank, setBank] = useState([]);
	return (
		<div className="flex flex-col space-y-1">
			<SelectInput
				label="Select Bank"
				options={["GTB", "First Bank", "Zenith Bank"]}
				valueLimit={1}
				values={bank}
				setValues={setBank}
			/>
			<Input label="Account number" inputRef={accountNoRef} />
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
				<PrimaryButton onClick={() => showDialog("CONFIRM", {})} dense>
					Transfer
				</PrimaryButton>
			</div>
		</div>
	);
}

export default OtherSystemsTransferForm;
