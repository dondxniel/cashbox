import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { GeneralContext } from "../../context/General.context";
import { GhostBtn } from "./Buttons";

function ToggleSidebar() {
	const { toggleSidebarShow } = useContext(GeneralContext);
	return (
		<span className="md:hidden">
			<GhostBtn onClick={toggleSidebarShow} variant="success" dark>
				<Bars3BottomLeftIcon className="h-7 w-7" />
			</GhostBtn>
		</span>
	);
}

export default ToggleSidebar;
