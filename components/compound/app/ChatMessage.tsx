import { motion } from "framer-motion";
import Avatar from "../../simple/Avatar";

function ChatMessage({ me = true }: { me?: boolean }) {
	return (
		<motion.div
			initial={{ rotate: 355, scale: 0.5 }}
			animate={{ rotate: 360, scale: 1 }}
			transition={{
				type: "spring",
				stiffness: 460,
				damping: 20,
			}}
			className="py-2"
		>
			<div
				className={`md:w-4/5 w-full flex ${
					me ? "flex-row ml-auto" : "flex-row-reverse"
				}`}
			>
				<div
					className={`surface-bg rounded-2xl flex-1 p-3 mx-3 text-sm ${
						me ? "rounded-tr-none" : "rounded-tl-none"
					}`}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Repellat veniam cum sint perspiciatis ducimus recusandae
					vitae adipisci nobis, cupiditate maxime eos possimus.
					Repudiandae corporis vel nemo eligendi. Dolore, error rem!
				</div>
				<Avatar />
			</div>
		</motion.div>
	);
}

export default ChatMessage;
