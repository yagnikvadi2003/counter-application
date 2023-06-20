import React from "react";
import { InputProps } from "interfaces/InputProps";

const Input: React.FunctionComponent<InputProps> = ({
	type,
	placeholder,
	value,
	onChange,
	disabled,
	ariaLabel,
	className,
}): JSX.Element => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			disabled={disabled}
			aria-label={ariaLabel}
			className={className}
		/>
	);
};

export default Input;
