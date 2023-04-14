import { TrashIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { DialogContext } from "../../../context/Dialog.context";
import { GhostBtn } from "../../simple/Buttons";
import AvatarAndFamily from "./AvatarAndFamily";

function BankAccountItem({
	selectedAccount,
	setSelectedAccount,
	item,
}: {
	selectedAccount: string | null;
	setSelectedAccount: any;
	item: any;
}) {
	const { showDialog } = useContext(DialogContext);
	return (
		<div
			className={`cursor-pointer hover:bg-black/10 ${
				selectedAccount === item.id && "bg-black/10"
			} py-2 px-4 rounded-2xl transition-all duration-300 flex flex-row`}
			key={item.id}
			onClick={() => {
				if (selectedAccount === item.id)
					return setSelectedAccount(null);
				setSelectedAccount(item.id);
			}}
		>
			<div
				className={`${
					selectedAccount === item.id ? "w-16" : "w-0"
				} transition-all duration-300 flex flex-row justify-center items-center overflow-hidden`}
			>
				<GhostBtn
					variant="danger"
					onClick={(e: any) => {
						e.stopPropagation();
						showDialog("DELETE_CONFIRMATION", {
							message: `Are you sure you want to delete ${item.name}'s ${item.bankName} account from your list of bank accounts?`,
						});
					}}
				>
					<TrashIcon className="w-5" />
				</GhostBtn>
			</div>
			<div className="flex-1">
				<AvatarAndFamily img={item.img} r>
					<div className="flex flex-row w-full items-center">
						<div className="flex-1 flex flex-col">
							<div className="font-bold">Simon Sambo</div>
							<div className="text-muted text-sm">
								{item.bankName} - {item.accountNumber}
							</div>
						</div>
					</div>
				</AvatarAndFamily>
			</div>
		</div>
	);
}

export default BankAccountItem;
