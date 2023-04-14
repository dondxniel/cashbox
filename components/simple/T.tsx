import TypeIt from "typeit-react";
import { Element } from "../../interfaces/types.interface";
function T({ children }: { children: Element }) {
	return (
		<TypeIt
			options={{
				speed: 1,
				waitUntilVisible: true,
				cursor: false,
			}}
		>
			{children}
		</TypeIt>
	);
}

export default T;
