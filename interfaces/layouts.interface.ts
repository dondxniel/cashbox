import { Element } from "./types.interface";

export interface PageLayoutProps {
	children: Element;
	title?: string;
	description?: string;
	icon?: string;
}
export interface AppLayoutProps {
	children: Element;
	title?: string;
	description?: string;
	icon?: string;
}
export interface PageSectionLayoutProps {
	children: Element;
	title?: string;
	handleClose?: null | (() => void);
}
export interface DialogLayoutProps {
	children: Element;
	show: boolean;
	removeDialog: () => void;
}
