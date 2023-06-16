import React from "react";
import { useSelector, useDispatch } from "react-redux";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { decrement, increment, incrementByAmount, asynchronous, reset } from "./app/counterSlice";
import { RootState } from "./app/store";

const App: React.FunctionComponent = (): JSX.Element => {
	const { count } = useSelector((state: RootState) => state.counter); // see store.ts
	const dispatch = useDispatch();

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
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
						dispatch(asynchronous());
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
