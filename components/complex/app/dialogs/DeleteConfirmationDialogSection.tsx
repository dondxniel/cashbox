import { useContext } from "react";
import { DialogContext } from "../../../../context/Dialog.context";
import { PrimaryButton } from "../../../simple/Buttons";
import DialogHeading from "../../../simple/DialogHeading";

function DeleteConfirmationDialogSection({ message }: { message: string }) {
	const { removeDialog } = useContext(DialogContext);
	return (
		<div>
			<DialogHeading>Delete</DialogHeading>
			{message}
			<div className="my-3 flex flex-row justify-center space-x-3">
				<PrimaryButton onClick={removeDialog} dense variant="default">
					Cancel
				</PrimaryButton>
				<PrimaryButton dense>Confirm</PrimaryButton>
			</div>
		</div>
	);
}

export default DeleteConfirmationDialogSection;
