import { transactionPINLength } from "../../../../constants/defaults.constant";
import useGenerateDynamicRefs from "../../../../hooks/useGenerateDynamicRefs";
import { PrimaryButton } from "../../../simple/Buttons";
import { OTP } from "../../../simple/Input";

function ChangeTransactionPinForm() {
	const { ref: oldPinRef } = useGenerateDynamicRefs(transactionPINLength);
	const { ref: newPinRef } = useGenerateDynamicRefs(transactionPINLength);
	const { ref: confirmNewPinRef } =
		useGenerateDynamicRefs(transactionPINLength);
	return (
		<div className="flex flex-col space-y-7">
			<div>
				<div>Enter Old PIN</div>
				<OTP inputRef={oldPinRef} />
			</div>
			<div>
				<div>Enter New PIN</div>
				<OTP inputRef={newPinRef} />
			</div>
			<div>
				<div>Confirm New PIN</div>
				<OTP inputRef={confirmNewPinRef} />
			</div>
			<div
				className="flex flex-row lg:justify-start justify-center"
				style={{ marginTop: 30, marginBottom: 30 }}
			>
				<PrimaryButton dense>Change</PrimaryButton>
			</div>
		</div>
	);
}

export default ChangeTransactionPinForm;
