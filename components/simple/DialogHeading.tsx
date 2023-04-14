import { Element } from "../../interfaces/types.interface";

function DialogHeading({ children }: { children: Element }) {
	return (
		<div className="mb-3 font-bold text-center mt-3 md:mt-0">
			{children}
		</div>
	);
}

export default DialogHeading;
