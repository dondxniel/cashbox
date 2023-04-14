import { dialogNames } from "./types.interface";

export interface GeneralContextInterface {
	sidebarShow: boolean;
	toggleSidebarShow: () => void;
}
export interface DialogContextInterface {
	activeDialog: { name: dialogNames; props: any } | null;
	showDialog: (name: dialogNames, props: any) => void;
	removeDialog: () => void;
}
