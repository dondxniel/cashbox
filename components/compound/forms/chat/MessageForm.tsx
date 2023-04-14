import { CameraIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { GhostBtn } from "../../../simple/Buttons";
import { TextArea } from "../../../simple/Input";

function MessageForm() {
	const inputRef = useRef(null);
	return (
		<div className="flex flex-row space-x-3 items-center">
			<GhostBtn>
				<CameraIcon className="h-4 w-4" />
			</GhostBtn>
			<div className="flex-1">
				<TextArea
					inputRef={inputRef}
					label="Send a message"
					placeholderNotLabel
					dense
				/>
			</div>
			<GhostBtn>
				<PaperAirplaneIcon className="h-4 w-4" />
			</GhostBtn>
		</div>
	);
}

export default MessageForm;
