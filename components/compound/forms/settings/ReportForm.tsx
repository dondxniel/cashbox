import { useContext, useRef, useState } from "react";
import { DialogContext } from "../../../../context/Dialog.context";
import { PrimaryButton } from "../../../simple/Buttons";
import { SelectInput, TextArea } from "../../../simple/Input";

function ReportForm() {
	const { showDialog } = useContext(DialogContext);

	const detailsRef = useRef(null);
	const [reported, setReported] = useState([]);
	return (
		<div className="flex flex-col space-y-1">
			<SelectInput
				label="Who do you want to report?"
				options={["Terminal Manager", "Delivery Man"]}
				valueLimit={1}
				values={reported}
				setValues={setReported}
			/>
			<TextArea label="Details" inputRef={detailsRef} />
			<div
				className="flex flex-row justify-center"
				style={{ marginTop: 25, marginBottom: 25 }}
			>
				<PrimaryButton dense>Submit Report</PrimaryButton>
			</div>
		</div>
	);
}

export default ReportForm;
