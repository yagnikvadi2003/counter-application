import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, incrementAsync, incrementByAmount, reset } from "./app/counterSlice";
import { RootState } from "./app/store";
import reactLogo from "./assets/react.svg";

import "./App.css";

import viteLogo from "/vite.svg";

const App: React.FunctionComponent = (): JSX.Element => {
	// Access the count value from the counter state using useSelector
	const dispatch = useDispatch();
	const { count } = useSelector((state: RootState) => state.counter); // see store.ts

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<h2>count is {count}</h2>
				<button
					onClick={() => {
						dispatch(increment());
					}}
				>
					+
				</button>
				<button
					onClick={() => {
						dispatch(decrement());
					}}
				>
					-
				</button>
				<button
					onClick={() => {
						dispatch(incrementByAmount(10));
					}}
				>
					+10
				</button>
				<br />
				<button
					onClick={() => {
						dispatch(incrementAsync());
					}}
				>
					async Event +2
				</button>
				<button
					onClick={() => {
						dispatch(reset());
					}}
				>
					Reset
				</button>
			</div>
		</>
	);
};

export default App;
