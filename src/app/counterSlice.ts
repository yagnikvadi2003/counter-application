import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
	count: number;
}

const initialState: CounterState = {
	count: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state): void => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.count += 1;
		},
		decrement: (state): void => {
			state.count -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
		asynchronous: (state): void => {
			// , action: PayloadAction<number>
			state.count += 2;
		},
		reset: (state): void => {
			state.count = 0;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, asynchronous, reset } =
	counterSlice.actions;

export default counterSlice.reducer;
