export interface ButtonProps {
	/**
	 * Specifies the type of button.
	 * Possible values: "button", "reset", "submit".
	 */
	type: "button" | "reset" | "submit";
	/**
	 * Event handler for button click event.
	 * Accepts a MouseEvent<HTMLButtonElement> event object.
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	/**
	 * Specifies whether the button is disabled.
	 */
	disabled?: boolean;
	/**
	 * The label or text content of the button.
	 */
	label: string;
}
