import { useRouter } from "next/router";
import { useContext } from "react";
import { settingsSectionsKeys } from "../../../constants/pageSections.constant";
import { DialogContext } from "../../../context/Dialog.context";
import AvatarAndFamily from "../../compound/app/AvatarAndFamily";

function SettingsSection() {
	const router = useRouter();
	const { showDialog } = useContext(DialogContext);
	const openSection2 = (key: string) => {
		router.push({
			query: {
				"sec-2": key,
			},
		});
	};
	return (
		<div className="flex flex-col space-y-3">
			<div className="flex flex-col space-y-3">
				<div
					className="cursor-pointer hover:bg-black/10 py-2 px-4 rounded-2xl transition-all duration-300 active:scale-[1.005] md:hover:scale-1 hover:scale-[1.005]"
					onClick={() =>
						openSection2(
							settingsSectionsKeys.CHANGE_TRANSACTION_PIN
						)
					}
				>
					<AvatarAndFamily img="/images/icons/PINIcon.svg">
						<div>Change Transaction PIN</div>
					</AvatarAndFamily>
				</div>
				<div
					className="cursor-pointer hover:bg-black/10 py-2 px-4 rounded-2xl transition-all duration-300 active:scale-[1.005] md:hover:scale-1 hover:scale-[1.005]"
					onClick={() =>
						openSection2(settingsSectionsKeys.CHANGE_PASSWORD)
					}
				>
					<AvatarAndFamily img="/images/icons/PasswordIcon.svg">
						<div>Change Password</div>
					</AvatarAndFamily>
				</div>
				<div
					className="cursor-pointer hover:bg-black/10 py-2 px-4 rounded-2xl transition-all duration-300 active:scale-[1.005] md:hover:scale-1 hover:scale-[1.005]"
					onClick={() =>
						openSection2(settingsSectionsKeys.YOUR_BANK_ACCOUNTS)
					}
				>
					<AvatarAndFamily img="/images/icons/BankIcon.svg">
						<div>Your Bank Accounts</div>
					</AvatarAndFamily>
				</div>
				<div
					className="cursor-pointer hover:bg-black/10 py-2 px-4 rounded-2xl transition-all duration-300 active:scale-[1.005] md:hover:scale-1 hover:scale-[1.005]"
					onClick={() => showDialog("REPORT", {})}
				>
					<AvatarAndFamily img="/images/icons/BullhornIcon.svg">
						<div>Report</div>
					</AvatarAndFamily>
				</div>
			</div>
		</div>
	);
}

export default SettingsSection;
