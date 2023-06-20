import React from "react";
import { ButtonProps } from "interfaces/ButtonProps";

const Button: React.FunctionComponent<ButtonProps> = ({
	type,
	onClick,
	disabled,
	label,
}): JSX.Element => {
	return (
		<button type={type} onClick={onClick} disabled={disabled}>
			{label}
		</button>
	);
};

export default Button;
