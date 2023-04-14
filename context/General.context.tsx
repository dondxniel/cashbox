import { createContext, useState } from "react";
import { GeneralContextInterface } from "../interfaces/context.interface";

import { Element } from "../interfaces/types.interface";

const defaultState = {
	sidebarShow: false,
	toggleSidebarShow: () => null,
};

export const GeneralContext =
	createContext<GeneralContextInterface>(defaultState);

function GeneralContextContainer({ children }: { children: Element }) {
	const [sidebarShow, setSidebarShow] = useState<boolean>(false);

	const generalContextValue = {
		sidebarShow,
		toggleSidebarShow: () => setSidebarShow(!sidebarShow),
	};
	return (
		<GeneralContext.Provider value={generalContextValue}>
			{children}
		</GeneralContext.Provider>
	);
}

export default GeneralContextContainer;
