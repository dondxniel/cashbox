function Avatar({ img = "/mock/delivery-man.jpeg", r = false }) {
	return (
		<div
			className={`h-11 w-11 ${
				r ? "rounded-full" : "rounded-xl"
			} overflow-hidden relative`}
		>
			<img
				src={img}
				className="h-inherit absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
			/>
		</div>
	);
}

export default Avatar;
