import { createContext, useState } from "react";
import AddBankAccountDialogSection from "../components/complex/app/dialogs/AddBankAccountDialogSection";
import ConfirmDialogSection from "../components/complex/app/dialogs/ConfirmDialogSection";
import DeleteConfirmationDialogSection from "../components/complex/app/dialogs/DeleteConfirmationDialogSection";
import DepositDialogSection from "../components/complex/app/dialogs/DepositDialogSection";
import ReportDialogSection from "../components/complex/app/dialogs/ReportDialogSection";
import TransferDialogSection from "../components/complex/app/dialogs/TransferDialogSection";
import WithdrawDialogSection from "../components/complex/app/dialogs/WithdrawDialogSection";
import DialogLayout from "../components/layouts/app/small/DialogLayout";
import { DialogContextInterface } from "../interfaces/context.interface";
import { dialogNames, Element } from "../interfaces/types.interface";

const registeredDialogs: any = {
	DEPOSIT: (props: any) => <DepositDialogSection {...props} />,
	TRANSFER: (props: any) => <TransferDialogSection {...props} />,
	WITHDRAW: (props: any) => <WithdrawDialogSection {...props} />,
	CONFIRM: (props: any) => <ConfirmDialogSection {...props} />,
	DELETE_CONFIRMATION: (props: any) => (
		<DeleteConfirmationDialogSection {...props} />
	),
	ADD_BANK_ACCOUNT: (props: any) => (
		<AddBankAccountDialogSection {...props} />
	),
	REPORT: (props: any) => <ReportDialogSection {...props} />,
};

const defaultState = {
	activeDialog: null,
};
const defaultContextValue = {
	activeDialog: null,
	showDialog: (name: dialogNames, props?: any) => null,
	removeDialog: () => null,
};

export const DialogContext =
	createContext<DialogContextInterface>(defaultContextValue);

function DialogContextContainer({ children }: { children: Element }) {
	const [state, setState] = useState<{
		activeDialog: { name: dialogNames; props: any } | null;
	}>(defaultState);

	const renderDialog = () => {
		const Component: any = () =>
			state.activeDialog
				? registeredDialogs[state.activeDialog?.name](
						state.activeDialog?.props
				  )
				: null;

		return (
			<DialogLayout
				show={!!state.activeDialog}
				removeDialog={removeDialog}
			>
				<Component />
			</DialogLayout>
		);
	};

	const removeDialog = () => setState(defaultState);
	const showDialog = (name: dialogNames, props: any = {}) => {
		setState({ activeDialog: { name, props } });
	};

	const dialogContextValue = {
		activeDialog: state.activeDialog,
		showDialog,
		removeDialog,
	};
	return (
		<>
			<DialogContext.Provider value={dialogContextValue}>
				{renderDialog()}
				{children}
			</DialogContext.Provider>
		</>
	);
}

export default DialogContextContainer;
