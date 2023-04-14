import { useContext, useState } from "react";
import { DialogContext } from "../../../../context/Dialog.context";
import { PrimaryButton } from "../../../simple/Buttons";
import BankAccountItem from "../../app/BankAccountItem";

const accounts = [
	{
		id: 1,
		img: "/mock/zenith-icon.svg",
		name: "Simon Sambo",
		bankName: "Zenith Bank",
		accountNumber: "2211234542",
	},
	{
		id: 2,
		img: "/mock/access-icon.svg",
		name: "Simon Sambo",
		bankName: "Access Bank",
		accountNumber: "2211234542",
	},
];

function YourBankAccountsForm() {
	const [selectedAccount, setSelectedAccount] = useState(null);
	const { showDialog } = useContext(DialogContext);
	return (
		<div className="flex flex-col space-y-3 px-5">
			<div className="flex flex-row justify-left space-x-3 my-3">
				<PrimaryButton
					onClick={() => showDialog("ADD_BANK_ACCOUNT", {})}
					dense
				>
					Add Bank Account
				</PrimaryButton>
			</div>
			{accounts.map((item: any) => (
				<BankAccountItem
					selectedAccount={selectedAccount}
					setSelectedAccount={setSelectedAccount}
					item={item}
				/>
			))}
		</div>
	);
}

export default YourBankAccountsForm;
