import { useContext, useState } from "react";
import { DialogContext } from "../../../../context/Dialog.context";
import { PrimaryButton } from "../../../simple/Buttons";
import { SelectInput } from "../../../simple/Input";

function PhysicalLocationForm() {
	const [values, setValues] = useState([]);
	const { showDialog, removeDialog } = useContext(DialogContext);
	return (
		<div>
			<SelectInput
				label="Select Physical Location"
				options={["SLT 1", "SLT 2", "SLT 3"]}
				values={values}
				setValues={setValues}
			/>
			<div
				className="flex flex-row justify-center space-x-3"
				style={{ marginTop: 25, marginBottom: 25 }}
			>
				<PrimaryButton onClick={removeDialog} dense variant="default">
					Cancel
				</PrimaryButton>
				<PrimaryButton onClick={() => showDialog("CONFIRM", {})} dense>
					Withdraw
				</PrimaryButton>
			</div>
		</div>
	);
}

export default PhysicalLocationForm;
