import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
	decrement,
	decrementByValue,
	increment,
	incrementAsync,
	incrementByAmount,
	incrementByValue,
	reset,
} from "../app/counterSlice";
import Button from "../components/Button";
import Input from "../components/Input";

const Counter = () => {
	const dispatch = useDispatch();

	const [incrementValue, setIncrementValue] = useState<number>(0);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const value = Number(event.target.value);
		setIncrementValue(value !== 0 ? Number(value) : 0);
	};

	return (
		<>
			<Button
				type="button"
				onClick={() => {
					dispatch(increment());
				}}
				label="+"
			/>
			<Button
				type="button"
				onClick={() => {
					dispatch(decrement());
				}}
				label="-"
			/>
			<Button
				type="button"
				onClick={() => {
					dispatch(incrementByAmount(10));
				}}
				label="+10"
			/>
			<br />
			<Button
				type="button"
				onClick={() => {
					dispatch(incrementAsync());
				}}
				label="async Event +2"
			/>
			<Button
				type="reset"
				onClick={() => {
					dispatch(reset());
				}}
				label="Reset"
			/>
			<br />
			<Input
				type="number"
				ariaLabel="Set increment amount"
				value={incrementValue}
				onChange={handleInputChange}
			/>
			<br />
			<Button
				type="button"
				onClick={() => {
					dispatch(incrementByValue(Number(incrementValue) || 0));
				}}
				label="Increase Amount"
			/>
			<Button
				type="button"
				onClick={() => {
					dispatch(decrementByValue(Number(incrementValue) || 0));
				}}
				label="decrease Amount"
			/>
		</>
	);
};

export default Counter;
