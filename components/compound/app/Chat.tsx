import { useRouter } from "next/router";
import Avatar from "../../simple/Avatar";

function Chat({ unread = false }: { unread?: boolean }) {
	const router = useRouter();
	const openChat = () => {
		router.push({ query: { ...router.query, chat: "random_chats_id" } });
	};
	return (
		<div
			className="flex flex-row items-center space-x-3 p-4 hover:scale-[1.015] transition-all duration-300 rounded-xl cursor-pointer select-none"
			onClick={openChat}
		>
			<Avatar />
			<div className="flex flex-col flex-1">
				<div className={unread ? "font-bold" : "font-normal"}>
					₦3,500
				</div>
				<div className="">
					<div className={" " + (unread ? "font-normal" : "")}>
						Lorem ipsum dolor sit, amet consectetur adipisicing...
					</div>
				</div>
			</div>
			<div>
				{unread && (
					<div className="p-1 bg-[color:var(--primary)] rounded-full" />
				)}
			</div>
		</div>
	);
}

export default Chat;
