import { useState } from "react";
import TerminalManagerSignUpForm from "../components/compound/forms/auth/TerminalManagerSignUpForm";
import UserSignUpForm from "../components/compound/forms/auth/UserSignUpForm";
import Layout from "../components/layouts/AuthLayout";
import TabLayout from "../components/layouts/small/TabLayout";
import L from "../components/simple/Link";
import Tabs from "../components/simple/Tabs";
import { signIn } from "../constants/pageLinks";

const tabs = ["User", "Terminal Manager"];

function SignUp() {
	const [activeTab, setActiveTab] = useState(tabs[0]);
	return (
		<Layout>
			<div className="text-center text-lg font-normal">Sign up</div>
			<div className="text-center text-sm mt-2">
				Already have an account? <L href={signIn}>Sign in</L> instead.
			</div>
			<div className="my-3 overflow-hidden">
				<Tabs
					tabs={tabs}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				{activeTab === tabs[0] && (
					<TabLayout>
						<div className="mt-5">
							<UserSignUpForm />
						</div>
					</TabLayout>
				)}
				{activeTab === tabs[1] && (
					<TabLayout>
						<div className="mt-5">
							<TerminalManagerSignUpForm />
						</div>
					</TabLayout>
				)}
			</div>
		</Layout>
	);
}

export default SignUp;
