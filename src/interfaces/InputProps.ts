import { HTMLInputTypeAttribute } from "types/Input";

export interface InputProps {
	/**
	 * Specifies the type of button.
	 * Possible values: "button", "checkbox", "color", "date", "datetime-local",
	 * "email", "file", "hidden", "image", "month", "number", "password", "radio",
	 * "range", "reset", "search", "submit", "tel", "text", "time", "url", "week".
	 */
	type: HTMLInputTypeAttribute;
	/**
	 * The placeholder text shown in the input when it is empty.
	 */
	placeholder?: string;
	/**
	 * The current value of the input.
	 * It can be a string, a number, or undefined.
	 */
	value?: string | number;
	/**
	 * Event handler for button click event.
	 * Accepts a MouseEvent<HTMLButtonElement> event object.
	 */
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	/**
	 * Specifies whether the input is disabled.
	 */
	disabled?: boolean;
	/*
	 * The value of aria-label should be a descriptive string
	 * that clearly explains the purpose or function of the
	 * element.
	 */
	ariaLabel: string;
	/**
	 * The CSS class name(s) to apply to the input element.
	 */
	className?: string;
}
