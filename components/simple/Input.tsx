import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import {
	InputProps,
	OTPInputProps,
	SelectInputProps,
	TextAreaProps,
} from "../../interfaces/simple.interface";
import { Ref } from "../../interfaces/types.interface";

function Input(props: InputProps) {
	const {
		type = "text",
		label = "Label",
		inputRef,
		defaultValue = "",
		tag = "",
	} = props;
	if (type === "password") return <PasswordInput {...props} />;
	return (
		<div>
			<div className="relative">
				<div
					className={`h-12 rounded-2xl bg-black/5 dark:bg-black/40 flex ${
						tag ? "flex-row-reverse" : "flex-row"
					} items-center overflow-hidden mt-7`}
				>
					<input
						type={type}
						className={`flex-1 bg-transparent border-none h-full outline-none ${
							tag ? "pl-1 pr-5" : "px-5"
						} peer placeholder:opacity-0`}
						placeholder={label}
						defaultValue={defaultValue}
						ref={inputRef}
					/>
					{tag && (
						<div className="flex peer-focus:flex peer-placeholder-shown:hidden flex-col justify-center ml-5">
							<div className="surface-bg px-1 rounded-md">
								{tag}
							</div>
						</div>
					)}
					<div
						className={`absolute left-5 top-[-40%] translate-y-0 peer-focus:translate-y-0 peer-focus:top-[-40%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:top-[50%] transition-all duration-300 pointer-events-none text-xs`}
					>
						{label}
					</div>
				</div>
			</div>
		</div>
	);
}

export function SelectInput({
	type = "text",
	label = "Label",
	values,
	setValues,
	options,
	searchKey = "",
	valueLimit = 1,
}: SelectInputProps) {
	const inputRefProxy = useRef<any>(null);
	const [inputValue, setInputValue] = useState<string>("");
	const [searchResults, setSearchResults] = useState<any[]>([]);
	const search = (e: any) => {
		if (!e?.target?.value) return setSearchResults([]);
		let results: any[] = [];
		let q = e?.target?.value;
		options.forEach((item: any) => {
			let str = searchKey ? item[searchKey] : item;
			if (str.toLowerCase().includes(q.toLowerCase())) results.push(item);
		});
		setSearchResults(results);
	};
	const popSelection = (idx: number) =>
		new Promise((resolve) => {
			let selectedCopy: any[] = [...values];
			selectedCopy.splice(idx, 1);
			setValues(selectedCopy);
			resolve(selectedCopy);
		});
	const addToSelected = async (item: any) => {
		let selectedCopy: any = [...values];
		if (selectedCopy.includes(item)) return;
		if (selectedCopy.length === valueLimit)
			selectedCopy = await popSelection(0);
		selectedCopy.push(item);
		setValues(selectedCopy);
		setSearchResults([]);
		setValues(selectedCopy);
		setInputValue("");
		inputRefProxy.current.value = "";
	};

	return (
		<div>
			<div className="relative">
				<ul className="absolute top-full surface-bg rounded-lg right-0 left-0  ml-5 z-[1]">
					{inputValue !== "" && searchResults.length === 0 ? (
						<div className="px-2 py-1 my-1">
							No item matches your search
						</div>
					) : (
						searchResults.map((item: any) => (
							<li
								key={
									`${searchKey ? item[searchKey] : item}` +
									Math.random()
								}
								className="px-2 py-1 my-1 border-b cursor-pointer"
								onClick={() => addToSelected(item)}
							>
								{searchKey ? item[searchKey] : item}
							</li>
						))
					)}
				</ul>
				<div
					className={`min-h-12 rounded-2xl bg-black/5 dark:bg-black/40 flex flex-row flex-wrap items-center overflow-hidden mt-7`}
				>
					<div className="ml-3 flex flex-row space-x-1 flex-wrap">
						{values.map((item: any, idx: number) => (
							<div
								key={idx}
								className={`surface-bg px-2 rounded-md h-inherit my-1 flex flex-row items-center space-x-1`}
							>
								<div>{searchKey ? item[searchKey] : item}</div>
								<button onClick={() => popSelection(idx)}>
									<XMarkIcon className="h-3 w-3 stroke-[#999]" />
								</button>
							</div>
						))}
					</div>
					<input
						type={type}
						value={inputValue}
						className={`flex-1 bg-transparent border-none h-12 outline-none relative z-[1] px-5 peer placeholder:opacity-0`}
						placeholder={
							values.length !== 0 ? "" : "Has selections"
						}
						ref={inputRefProxy}
						onChange={(e: any) => {
							setInputValue(e.target.value);
							search(e);
						}}
					/>
					<div
						className={`absolute left-5 top-[-20px] translate-y-0 peer-focus:translate-y-0 peer-focus:top-[-20px] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:top-[50%] transition-all duration-300 pointer-events-none text-xs`}
					>
						{`${label} ${
							valueLimit > 1
								? `(can't select more than ${valueLimit})`
								: ""
						}`}
					</div>
				</div>
			</div>
		</div>
	);
}

export function TextArea({
	label = "Label",
	inputRef,
	defaultValue = "",
	placeholderNotLabel = false,
	hitEnter = () => null,
	dense = false,
}: TextAreaProps) {
	return (
		<div>
			<div
				className={`relative ${
					placeholderNotLabel && "overflow-hidden"
				} `}
			>
				<div
					className={`${
						dense ? "h-12" : "h-18"
					} rounded-2xl bg-black/5 dark:bg-black/40 flex flex-row items-center overflow-hidden ${
						placeholderNotLabel ? "mt-0" : "mt-7"
					}`}
				>
					<textarea
						rows={1}
						className={`flex-1 bg-transparent border-none h-full outline-none px-5 peer py-3 placeholder:opacity-0 find`}
						placeholder={label}
						defaultValue={defaultValue}
						ref={inputRef}
						onKeyDown={(e: any) => {
							if (e.keyCode === 13 && !e.shiftKey) hitEnter();
						}}
					></textarea>
					<div
						className={`absolute left-5 top-[-20px] translate-y-0 peer-focus:translate-y-0 peer-focus:top-[-20px] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:top-[50%] transition-all duration-300 pointer-events-none text-xs`}
					>
						{label}
					</div>
				</div>
			</div>
		</div>
	);
}

export function OTP({ inputRef }: OTPInputProps) {
	return (
		<div
			className="grid gap-3"
			style={{
				gridTemplateColumns: `repeat(${inputRef.current.length}, 1fr)`,
			}}
		>
			{inputRef.current.map((individualRef: Ref, i: number) => (
				<div className="w-full under-bg md:h-10 h-12 rounded-xl">
					<input
						type={"tel"}
						className={`flex-1 bg-transparent border-none h-full outline-none peer w-full text-center placeholder:text-normal hide-entries`}
						placeholder={"_"}
						ref={individualRef}
						onChange={(e: any) => {
							if (
								!(
									e.target.value &&
									/^[0-9]*$/.test(e.target.value)
								)
							)
								individualRef.current.value = "";
							// ? go to previous input if current is empty
							if (
								individualRef.current?.value === "" &&
								i !== 0
							) {
								inputRef.current[i - 1].current.focus();
							}
							// ? go to next input if current is filled
							if (
								individualRef.current?.value !== "" &&
								i !== inputRef.current.length - 1
							) {
								inputRef.current[i + 1].current.focus();
							}
							// ? stop of additional string if one character has been entered. A way of ensuring only one element is entered in each input field since the maxLength and max props are not working.
							if (
								individualRef.current?.value !== undefined &&
								individualRef.current?.value.length !== 0
							)
								individualRef.current.value =
									individualRef.current?.value[0];
						}}
					/>
				</div>
			))}
		</div>
	);
}

function PasswordInput({
	type,
	label = "Label",
	inputRef,
	defaultValue = "",
	tag = "",
}: InputProps) {
	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => setShowPassword(!showPassword);
	return (
		<div className="relative">
			<div
				className={`h-12 rounded-2xl bg-black/5 dark:bg-black/40 flex ${
					tag ? "flex-row-reverse" : "flex-row"
				} items-center overflow-hidden mt-7`}
			>
				<input
					type={showPassword ? "text" : type}
					className={`flex-1 bg-transparent border-none h-full outline-none ${
						tag ? "pl-1 pr-5" : "px-5"
					} peer placeholder:opacity-0`}
					placeholder={label}
					defaultValue={defaultValue}
					ref={inputRef}
				/>
				<div
					className="flex flex-col justify-center ml-5 p-3 rounded-full cursor-pointer"
					onClick={toggleShowPassword}
				>
					{showPassword ? (
						<EyeSlashIcon className="h-5 w-5 stroke-[#999]" />
					) : (
						<EyeIcon className="h-5 w-5 stroke-[#999]" />
					)}
				</div>

				<div
					className={`absolute left-5 top-[-40%] translate-y-0 peer-focus:translate-y-0 peer-focus:top-[-40%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:top-[50%] transition-all duration-300 pointer-events-none text-xs`}
				>
					{label}
				</div>
			</div>
		</div>
	);
}

export default Input;
