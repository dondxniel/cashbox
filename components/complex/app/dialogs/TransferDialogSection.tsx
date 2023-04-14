import { useState } from "react";
import { appName } from "../../../../constants/defaults.constant";
import InSystemTransferForm from "../../../compound/forms/transfer/InSystemTransferForm";
import OtherSystemsTransferForm from "../../../compound/forms/transfer/OtherSystemsTransferForm";
import TabLayout from "../../../layouts/small/TabLayout";
import DialogHeading from "../../../simple/DialogHeading";
import Tabs from "../../../simple/Tabs";

const tabs = [appName, "Others"];

function TransferDialogSection() {
	const [activeTab, setActiveTab] = useState(tabs[0]);
	return (
		<div>
			<DialogHeading>Transfer</DialogHeading>
			<Tabs
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			{activeTab === tabs[0] && (
				<TabLayout>
					<InSystemTransferForm />
				</TabLayout>
			)}
			{activeTab === tabs[1] && (
				<TabLayout>
					<OtherSystemsTransferForm />
				</TabLayout>
			)}
		</div>
	);
}

export default TransferDialogSection;
