import { Element } from "../../../interfaces/types.interface";

function TabLayout({ children }: { children: Element }) {
	return (
		<div className="animate__animated animate__fadeInUp animate__faster">
			{children}
		</div>
	);
}

export default TabLayout;
