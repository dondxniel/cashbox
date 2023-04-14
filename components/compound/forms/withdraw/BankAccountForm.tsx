import { CheckIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { DialogContext } from "../../../../context/Dialog.context";
import { PrimaryButton } from "../../../simple/Buttons";
import AvatarAndFamily from "../../app/AvatarAndFamily";

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

function BankAccountForm() {
	const [selectedAccount, setSelectedAccount] = useState(null);
	const { showDialog, removeDialog } = useContext(DialogContext);
	return (
		<div className="mt-5 flex flex-col space-y-3">
			{accounts.map((item: any) => (
				<div
					className={`cursor-pointer hover:bg-black/10 ${
						selectedAccount === item.id && "bg-black/10"
					} py-2 px-4 rounded-2xl transition-all duration-300`}
					key={item.id}
					onClick={() => setSelectedAccount(item.id)}
				>
					<AvatarAndFamily img={item.img} r>
						<div className="flex flex-row w-full items-center">
							<div className="flex-1 flex flex-col">
								<div className="font-bold">Simon Sambo</div>
								<div className="text-muted text-sm">
									{item.bankName} - {item.accountNumber}
								</div>
							</div>
							{selectedAccount === item.id && (
								<CheckIcon className="h-4 w-4" />
							)}
						</div>
					</AvatarAndFamily>
				</div>
			))}
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

export default BankAccountForm;
