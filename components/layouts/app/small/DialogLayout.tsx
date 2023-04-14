import { DialogLayoutProps } from "../../../../interfaces/layouts.interface";

function DialogLayout({ children, show, removeDialog }: DialogLayoutProps) {
	return (
		<div
			className={`absolute top-0 bottom-0 left-0 right-0 bg-black/40 flex flex-col transition-all duration-200 delay-75 ${
				show ? "z-10" : "z-[-1]"
			}`}
			onClick={removeDialog}
		>
			<div
				onClick={(e: any) => {
					e.stopPropagation();
					e.preventDefault();
				}}
				className="mx-auto mt-auto max-h-[90%] md:mt-5 w-[95%] md:w-3/5 lg:w-2/5 xl:w-[30%] flex flex-col space-y-1 min-h-96 md:min-h-0"
			>
				<div
					className={`surface-bg rounded-2xl md:rounded-b-2xl rounded-b-none transition-all duration-300 text-normal font-base md:font-light overflow-hidden ${
						show
							? "h-full md:min-h-0 min-h-[20rem] md:pt-5 md:pb-2 pt-2 pb-5 px-4"
							: "h-0 p-0"
					}`}
				>
					<div className="under-bg w-36 h-2 rounded-full mx-auto mb-2 block md:hidden" />
					<div className="h-full overflow-y-scroll">{children}</div>
					<div className="under-bg w-36 h-2 rounded-full mx-auto mt-2 md:block hidden" />
				</div>
			</div>
		</div>
	);
}

export default DialogLayout;
