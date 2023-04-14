import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import ChatMessage from "../../compound/app/ChatMessage";
import MessageForm from "../../compound/forms/chat/MessageForm";
import Avatar from "../../simple/Avatar";
import { GhostBtn } from "../../simple/Buttons";

function ChatSection() {
	const router = useRouter();

	const closeSection = () => {
		let { query } = router;
		delete query.chat;
		router.push({ query });
	};
	return (
		<div className="h-full flex flex-col">
			<div className="md:px-5 px-2 flex flex-row items-center justify-between">
				<div className="mx-auto flex flex-col items-center">
					<Avatar />
					<div className="font-bold font-lg mt-2">₦3,500</div>
				</div>
				<GhostBtn variant="danger" onClick={closeSection}>
					<XMarkIcon className="h-5 w-5" />
				</GhostBtn>
			</div>
			<div className="flex-1 overflow-y-scroll flex flex-col-reverse px-3 under-bg">
				<ChatMessage />
				<ChatMessage me={false} />
				<ChatMessage me={false} />
				<ChatMessage />
				<ChatMessage me={false} />
				<ChatMessage />
			</div>
			<div className="md:pt-2 pt-1">
				<MessageForm />
			</div>
		</div>
	);
}

export default ChatSection;
