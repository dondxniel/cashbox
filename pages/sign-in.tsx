import UserSignInForm from "../components/compound/forms/auth/UserSignInForm";
import Layout from "../components/layouts/AuthLayout";
import L from "../components/simple/Link";
import { signUp } from "../constants/pageLinks";

function SignIn() {
	return (
		<Layout>
			<div className="text-center text-lg font-normal">Sign in</div>
			<div className="text-center text-sm mt-2">
				Don&apos;t have an account yet? <L href={signUp}>Sign up</L>{" "}
				here.
			</div>
			<div className="mb-3 overflow-hidden">
				<UserSignInForm />
			</div>
		</Layout>
	);
}

export default SignIn;
