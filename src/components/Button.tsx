import React from "react";

import { ButtonProps } from "types/ButtonProps";

const Button: React.FunctionComponent<ButtonProps> = ({
	type,
	onClick,
	disabled,
	children,
}): JSX.Element => {
	return (
		<button type={type} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
