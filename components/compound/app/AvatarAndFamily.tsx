import { AvatarAndFamilyProps } from "../../../interfaces/compound.interface";
import Avatar from "../../simple/Avatar";

function AvatarAndFamily({
	children,
	img = "/mock/delivery-man.jpeg",
	r = false,
}: AvatarAndFamilyProps) {
	return (
		<div className="flex flex-row items-center space-x-2 md:space-x-2">
			<Avatar img={img} r={r} />
			{children}
		</div>
	);
}

export default AvatarAndFamily;
