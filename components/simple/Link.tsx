import Link from "next/link";
import { LinkProps } from "../../interfaces/simple.interface";

const L = ({ href, children }: LinkProps) => {
	return (
		<Link href={href}>
			<div className="group text-[color:var(--primary)] transition-all duration-300 inline-flex flex-col">
				<div className="inline m-0 p-0">
					{children}
					<div className="flex flex-row h-[2px] m-0 p-0 rounded-full">
						<div className="flex-0 group-hover:flex-1 transition-all duration-300 bg-[color:var(--primary)]" />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default L;
