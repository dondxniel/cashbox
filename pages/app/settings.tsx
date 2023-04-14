import { useRouter } from "next/router";
import ChangePasswordSection from "../../components/complex/app/ChangePassowordSection";
import ChangeTransactionPin from "../../components/complex/app/ChangeTransactionPinSection";
import SettingsSection from "../../components/complex/app/SettingsSection";
import YourBankAccountsSection from "../../components/complex/app/YourBankAccountsSection";
import AppLayout from "../../components/layouts/app/AppLayout";
import PageSectionLayout from "../../components/layouts/app/small/PageSectionLayout";
import { settingsSectionsKeys } from "../../constants/pageSections.constant";

function Settings() {
	const router = useRouter();
	const handleCloseSection2 = () => {
		let { query } = router;
		delete query["sec-2"];
		router.push({ query });
	};
	return (
		<AppLayout>
			<PageSectionLayout title="Settings">
				<SettingsSection />
			</PageSectionLayout>
			{router.query["sec-2"] && (
				<>
					{router.query["sec-2"] ===
						settingsSectionsKeys.CHANGE_TRANSACTION_PIN && (
						<PageSectionLayout
							title="Change Transaction PIN"
							handleClose={handleCloseSection2}
						>
							<ChangeTransactionPin />
						</PageSectionLayout>
					)}
					{router.query["sec-2"] ===
						settingsSectionsKeys.CHANGE_PASSWORD && (
						<PageSectionLayout
							title="Change Password"
							handleClose={handleCloseSection2}
						>
							<ChangePasswordSection />
						</PageSectionLayout>
					)}
					{router.query["sec-2"] ===
						settingsSectionsKeys.YOUR_BANK_ACCOUNTS && (
						<PageSectionLayout
							title="Your Bank Account"
							handleClose={handleCloseSection2}
						>
							<YourBankAccountsSection />
						</PageSectionLayout>
					)}
				</>
			)}
		</AppLayout>
	);
}

export default Settings;
