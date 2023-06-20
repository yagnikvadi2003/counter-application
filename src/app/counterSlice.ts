import { toast } from "react-toastify";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "interfaces/CounterState";

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
			// Check if the count is greater than zero
			if (state.count > 0) {
				state.count -= 1;
			} else {
				// If count is already zero, do nothing
				toast.error("If count is already zero", {
					position: toast.POSITION.BOTTOM_RIGHT,
					autoClose: 3000,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				});
			}
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
		// Reducer to increment the count by a input amount
		incrementByValue: (state, action) => {
			state.count += action.payload;
		},
		// Reducer to decrement the count by a input amount
		decrementByValue: (state, action) => {
			if (state.count === 0) {
				toast.error("Cannot Decrement Below 0", {
					position: toast.POSITION.BOTTOM_RIGHT,
					autoClose: 3000,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				});
			} else {
				state.count -= action.payload;
			}
		},
		// Reducer to reset the count to 0
		reset: (state): void => {
			if (state.count === 0) {
				toast.error("Count has been reset to 0", {
					position: toast.POSITION.BOTTOM_RIGHT,
					autoClose: 3000,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				});
			} else {
				state.count = 0;
			}
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
	incrementByValue,
	decrementByValue,
	reset,
} = counterSlice.actions;

// Export the counter reducer
export default counterSlice.reducer;
