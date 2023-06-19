import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the counter state
export interface CounterState {
	count: number;
	status: "idle" | "loading" | "failed";
}

// Define the initial state of the counter
const initialState: CounterState = Object.freeze({
	count: 0,
	status: "idle",
});

// Create the counter slice using createSlice
export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		// Reducer to increment the count by 1
		increment: (state): void => {
			state.count += 1;
		},
		// Reducer to decrement the count by 1
		decrement: (state): void => {
			state.count -= 1;
		},
		// Reducer to increment the count by a specific amount
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
		// Reducer to set the status to "loading" when incrementAsync action is dispatched
		incrementAsync: state => {
			state.status = "loading";
		},
		// Reducer to set the status to "idle" and increment the count by 2 when incrementAsyncSuccess action is dispatched
		incrementAsyncSuccess: state => {
			state.status = "idle";
			state.count += 2;
		},
		// Reducer to set the status to "failed" when incrementAsyncFailure action is dispatched
		incrementAsyncFailure: state => {
			state.status = "failed";
		},
		// Reducer to reset the count to 0
		reset: (state): void => {
			state.count = 0;
		},
	},
});

// Export the generated action creators
export const {
	increment,
	decrement,
	incrementByAmount,
	incrementAsync,
	incrementAsyncSuccess,
	incrementAsyncFailure,
	reset,
} = counterSlice.actions;

// Export the counter reducer
export default counterSlice.reducer;
