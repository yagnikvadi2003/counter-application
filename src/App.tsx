import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import { RootState } from "./app/store";
import reactLogo from "./assets/react.svg";
import Counter from "./pages/Counter";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import viteLogo from "/vite.svg";

const App: React.FunctionComponent = (): JSX.Element => {
	// Access the count value from the counter state using useSelector
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
				<Counter />
			</div>
			<ToastContainer />
		</>
	);
};

export default App;
