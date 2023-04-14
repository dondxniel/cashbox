import { useRef, useState } from "react";
import { PrimaryButton } from "../../../simple/Buttons";
import Input, { SelectInput } from "../../../simple/Input";

const ops = [
	{ name: "KASU" },
	{ name: "KUST" },
	{ name: "ATTAP" },
	{ name: "KSU" },
];

function UserSignUpForm() {
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const mobileNumberRef = useRef(null);
	const usernameRef = useRef(null);
	const passwordRef = useRef(null);
	const [institution, setInstitution] = useState([]);
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(institution);
	};
	return (
		<form onSubmit={handleSubmit}>
			<Input label="Name" inputRef={nameRef} />
			<Input label="Email" inputRef={emailRef} type="email" />
			<Input
				label="Mobile Number"
				inputRef={mobileNumberRef}
				type="tel"
			/>
			<Input label="Username" inputRef={usernameRef} tag="@" />
			<Input label="Password" inputRef={passwordRef} type="password" />
			<SelectInput
				label="Institution"
				values={institution}
				setValues={setInstitution}
				type="select"
				options={ops}
				searchKey="name"
				valueLimit={1}
			/>
			<div className="my-7 flex flex-col">
				<PrimaryButton dense>Sign up</PrimaryButton>
			</div>
		</form>
	);
}

export default UserSignUpForm;
