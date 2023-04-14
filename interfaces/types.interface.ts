import {
	Dispatch,
	ReactNode,
	RefObject,
	SetStateAction,
	SyntheticEvent,
} from "react";

export type Element = ReactNode | ReactNode[];
export type SetState = Dispatch<SetStateAction<any>>;
export type Ref = RefObject<any>;
export type InputEvent = SyntheticEvent;
export type dialogNames =
	| "TRANSFER"
	| "WITHDRAW"
	| "DEPOSIT"
	| "CONFIRM"
	| "DELETE_CONFIRMATION"
	| "ADD_BANK_ACCOUNT"
	| "REPORT";
