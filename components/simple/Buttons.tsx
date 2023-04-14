import Link from "next/link";
import { ButtonProps } from "../../interfaces/simple.interface";

export function PrimaryButton(props: ButtonProps) {
	const { children, dense = false, href = "", className, variant } = props;
	const classes = `${dense ? "h-12" : "h-14"} px-7 rounded-xl ${
		variant === "default"
			? "bg-white text-[var(--black)] border"
			: "gradient-bg-effect"
	} text-white inline-block ${className}`;
	if (href)
		return (
			<Link href={href}>
				<div className={classes}>
					<div className="h-full flex flex-col justify-center items-center">
						{children}
					</div>
				</div>
			</Link>
		);
	return (
		<button {...props} className={classes}>
			{children}
		</button>
	);
}

export function GhostBtn({
	children,
	href = "",
	onClick,
	className,
	variant = "default",
	dark = false,
}: ButtonProps) {
	const classes =
		`rounded-full p-2 ${
			dark
				? "bg-black/50 hover:bg-black/50"
				: "bg-black/10 hover:bg-black/30"
		} hover:text-white transition-all duration-300 ${
			variant === "default" && "dark:text-white text-[var(--black)]"
		} ${variant === "primary" && "text-blue-500"} ${
			variant === "danger" && "text-red-500"
		} ${variant === "success" && "text-green-500"} ${
			variant === "white" && "text-white"
		} ${variant === "black" && "text-[var(--black)]"} ` + className;
	if (href)
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		);
	return (
		<button className={classes} onClick={onClick}>
			{children}
		</button>
	);
}
