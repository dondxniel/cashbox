import {
	ButtonHTMLAttributes,
	InputHTMLAttributes,
	TextareaHTMLAttributes,
} from "react";
import { Element, Ref, SetState } from "./types.interface";

export interface AvatarProps {
	img?: string;
	r?: boolean;
}

export interface CustomHeadProps {
	title?: string;
	description?: string;
	icon?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	dense?: boolean;
	href?: string;
	variant?: "default" | "primary" | "danger" | "success" | "white" | "black";
	dark?: boolean;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	inputRef: Ref;
	tag?: string;
}

export interface TextAreaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	inputRef: Ref;
	label: string;
	placeholderNotLabel?: boolean;
	dense?: boolean;
	hitEnter?: () => void;
}

export interface SelectInputProps extends Omit<InputProps, "inputRef"> {
	options: any[];
	searchKey?: string;
	valueLimit?: number;
	values: any[];
	setValues: SetState;
}

export interface OTPInputProps extends Omit<InputProps, "tag" | "label"> {}

export interface LinkProps {
	href: string;
	children: Element;
}

export interface SidebarLinkProps {
	children: Element;
	href?: string;
	onClick?: () => void;
	active?: boolean;
}
