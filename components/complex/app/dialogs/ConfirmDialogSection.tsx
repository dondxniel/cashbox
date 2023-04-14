import { useContext } from "react";
import { transactionPINLength } from "../../../../constants/defaults.constant";
import { DialogContext } from "../../../../context/Dialog.context";
import useGenerateDynamicRefs from "../../../../hooks/useGenerateDynamicRefs";
import { PrimaryButton } from "../../../simple/Buttons";
import DialogHeading from "../../../simple/DialogHeading";
import { OTP } from "../../../simple/Input";

function ConfirmDialogSection({
	text = "You can confirm by entering your transaction PIN.",
}: {
	text?: string;
}) {
	const { removeDialog } = useContext(DialogContext);
	const { ref } = useGenerateDynamicRefs(transactionPINLength);
	return (
		<div className="text-center mx-10">
			<DialogHeading>Confirm</DialogHeading>
			<p>{text}</p>
			<div className="my-5">
				<OTP inputRef={ref} />
			</div>
			<div className="mb-3 flex flex-row justify-center space-x-3">
				<PrimaryButton onClick={removeDialog} dense variant="default">
					Cancel
				</PrimaryButton>
				<PrimaryButton dense>Confirm</PrimaryButton>
			</div>
		</div>
	);
}

export default ConfirmDialogSection;
