import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { appHome, appSettings } from "../../../constants/pageLinks";
import { DialogContext } from "../../../context/Dialog.context";
import { GeneralContext } from "../../../context/General.context";
import DepositIcon from "../../../public/images/icons/DepositIcon";
import HomeIcon from "../../../public/images/icons/HomeIcon";
import LogoutIcon from "../../../public/images/icons/LogoutIcon";
import SettingsIcon from "../../../public/images/icons/SettingsIcon";
import ThemeChangerIcon from "../../../public/images/icons/ThemeChangerIcon";
import TransferIcon from "../../../public/images/icons/TransferIcon";
import WithdrawIcon from "../../../public/images/icons/WithdrawIcon";
import Avatar from "../../simple/Avatar";
import SidebarLink from "../../simple/SidebarLink";
import WalletCard from "./WalletCard";

function Sidebar() {
	const router = useRouter();
	const [linksActiveStatus, setLinkActiveStatus] = useState({
		home: false,
		deposit: false,
		transfer: false,
		withdraw: false,
		settings: false,
	});
	const { sidebarShow, toggleSidebarShow } = useContext(GeneralContext);
	const { activeDialog, showDialog } = useContext(DialogContext);
	const [showWalletCard, setShowWalletCard] = useState(false);
	const toggleShowWalletCard = () => setShowWalletCard(!showWalletCard);

	useEffect(() => {
		if (sidebarShow) toggleSidebarShow();
		setLinkActiveStatus({
			home:
				router.pathname === appHome &&
				activeDialog?.name !== "TRANSFER" &&
				activeDialog?.name !== "DEPOSIT" &&
				activeDialog?.name !== "CONFIRM" &&
				activeDialog?.name !== "WITHDRAW",
			deposit: activeDialog?.name === "DEPOSIT",
			transfer: activeDialog?.name === "TRANSFER",
			withdraw: activeDialog?.name === "WITHDRAW",
			settings:
				router.pathname === appSettings &&
				activeDialog?.name !== "TRANSFER" &&
				activeDialog?.name !== "DEPOSIT" &&
				activeDialog?.name !== "CONFIRM" &&
				activeDialog?.name !== "WITHDRAW",
		});
	}, [router.pathname, activeDialog?.name]);

	return (
		<div
			className={`transition-all duration-300 md:relative absolute top-0 left-0 right-0 bottom-0 flex flex-row md:bg-transparent bg-black/30 ${
				sidebarShow ? "md:z-[1] z-[3]" : "md:z-[1] z-[-1]"
			}`}
			onClick={toggleSidebarShow}
		>
			<div
				className={`h-full transition-all ${
					sidebarShow
						? `${
								showWalletCard ? "w-80" : "w-20"
						  } delay-300 duration-200`
						: `w-0 ${
								showWalletCard ? "md:w-80" : "md:w-20"
						  } duration-75`
				} overflow-hidden`}
				onClick={(e: any) => e.stopPropagation()}
			>
				<div className="page-section-stiff flex flex-row space-x-1 items-center">
					<div className=" flex flex-col items-center justify-center md:space-y-10 space-y-5">
						<img src="/app-logo.svg" className="h-14" alt="" />
						<div
							className="cursor-pointer active:scale-110 transition-all duration-300"
							onClick={(e: any) => {
								toggleShowWalletCard();
							}}
						>
							<Avatar />
						</div>
						<div className="flex flex-col flex-1 overflow-y-scroll items-center md:space-y-5 space-y-3">
							<SidebarLink
								href={appHome}
								active={linksActiveStatus.home}
							>
								<HomeIcon
									stroke={
										linksActiveStatus.home
											? "white"
											: "#999"
									}
								/>
							</SidebarLink>
							<SidebarLink
								active={linksActiveStatus.deposit}
								onClick={() => showDialog("DEPOSIT", {})}
							>
								<DepositIcon
									stroke={
										linksActiveStatus.deposit
											? "white"
											: "#999"
									}
								/>
							</SidebarLink>
							<SidebarLink
								active={linksActiveStatus.transfer}
								onClick={() => showDialog("TRANSFER", {})}
							>
								<TransferIcon
									stroke={
										linksActiveStatus.transfer
											? "white"
											: "#999"
									}
								/>
							</SidebarLink>
							<SidebarLink
								active={linksActiveStatus.withdraw}
								onClick={() => showDialog("WITHDRAW", {})}
							>
								<WithdrawIcon
									stroke={
										linksActiveStatus.withdraw
											? "white"
											: "#999"
									}
								/>
							</SidebarLink>
							<SidebarLink
								href={appSettings}
								active={linksActiveStatus.settings}
							>
								<SettingsIcon
									stroke={
										linksActiveStatus.settings
											? "white"
											: "#999"
									}
								/>
							</SidebarLink>
							<SidebarLink>
								<ThemeChangerIcon stroke="#999" />
							</SidebarLink>
							<SidebarLink>
								<LogoutIcon stroke="#999" />
							</SidebarLink>
						</div>
					</div>
					<div
						className={`${
							showWalletCard ? "w-full" : "w-0 delay-700"
						} overflow-hidden`}
					>
						<WalletCard />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
