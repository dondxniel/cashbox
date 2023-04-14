import { SetState } from "../../interfaces/types.interface";

function Tabs({
	tabs,
	activeTab,
	setActiveTab,
}: {
	tabs: string[];
	activeTab: string;
	setActiveTab: SetState;
}) {
	const activeClass = `flex-1 text-center py-2 rounded-2xl gradient-bg text-white transition-all duration-300`;
	const normalClass = `flex-1 text-center py-2 rounded-2xl hover:bg-black/5 transition-all duration-300 cursor-pointer `;
	return (
		<div className="under-bg flex flex-row space-x-2 rounded-2xl text-[color:var(--light-text)]">
			{tabs.map((item: string) => (
				<div
					key={item}
					className={activeTab === item ? activeClass : normalClass}
					onClick={() => setActiveTab(item)}
				>
					{item}
				</div>
			))}
		</div>
	);
}

export default Tabs;
