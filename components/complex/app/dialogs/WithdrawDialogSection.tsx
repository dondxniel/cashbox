import { useState } from "react";
import BankAccountForm from "../../../compound/forms/withdraw/BankAccountForm";
import PhysicalLocationForm from "../../../compound/forms/withdraw/PhysicalLocationForm";
import TabLayout from "../../../layouts/small/TabLayout";
import Tabs from "../../../simple/Tabs";

const tabs = ["Physical Location", "Bank Account"];

function WithdrawDialogSection() {
	const [activeTab, setActiveTab] = useState(tabs[0]);
	return (
		<div>
			<Tabs
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			{activeTab === tabs[0] && (
				<TabLayout>
					<PhysicalLocationForm />
				</TabLayout>
			)}
			{activeTab === tabs[1] && (
				<TabLayout>
					<BankAccountForm />
				</TabLayout>
			)}
		</div>
	);
}

export default WithdrawDialogSection;
