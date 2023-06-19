export interface ButtonProps {
	type: "button" | "reset" | "submit";
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	children: string | "Button";
}
