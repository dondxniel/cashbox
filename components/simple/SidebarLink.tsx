import Link from "next/link";
import { SidebarLinkProps } from "../../interfaces/simple.interface";
import { Element } from "../../interfaces/types.interface";

function LinkInner({ children }: { children: Element }) {
	return <div>{children}</div>;
}

function SidebarLink({
	href = "",
	onClick = () => null,
	children,
	active = false,
}: SidebarLinkProps) {
	const classes = `${
		active ? "gradient-bg-effect" : "hover:bg-black/5"
	} transition-all duration-300 w-11 h-11 rounded-xl flex flex-row items-center justify-center`;
	if (href)
		return (
			<Link href={href}>
				<div className={classes}>
					<LinkInner>{children}</LinkInner>
				</div>
			</Link>
		);
	return (
		<button onClick={onClick} className={classes}>
			<LinkInner>{children}</LinkInner>
		</button>
	);
}

export default SidebarLink;
