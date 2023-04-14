import { XMarkIcon } from "@heroicons/react/24/outline";
import { PageSectionLayoutProps } from "../../../../interfaces/layouts.interface";
import { GhostBtn } from "../../../simple/Buttons";

function PageSectionLayout({
	children,
	title = "",
	handleClose = null,
}: PageSectionLayoutProps) {
	return (
		<div className="flex-1 h-screen page-section animate__animated animate__fadeIn animate__faster transition-all duration-300 md:static absolute left-0 right-0 flex flex-col">
			{(title || handleClose) && (
				<div className="px-5 py-2 flex flex-row justify-between items-center">
					{title && (
						<div className="font-bold font-uppercase">{title}</div>
					)}
					{handleClose && (
						<GhostBtn variant="danger" onClick={handleClose}>
							<XMarkIcon className="h-4 w-4" />
						</GhostBtn>
					)}
				</div>
			)}
			<div className="overflow-y-scroll overflow-x-hidden flex-1 h-full">
				{children}
			</div>
		</div>
	);
}

export default PageSectionLayout;

/**
 * THIS WAS WHAT WORKED PREVIOUSLY.
	<div className="flex-1 h-screen page-section overflow-y-scroll animate__animated animate__fadeIn animate__faster transition-all duration-300 md:static absolute left-0 right-0">
		{children}
	</div>


*/
