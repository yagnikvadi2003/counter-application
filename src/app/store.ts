import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { counterSaga } from "./counterSaga";
import counterReducer from "./counterSlice";

// Create a saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
const store = configureStore({
	reducer: {
		counter: counterReducer, // Set the counterReducer as the reducer for the "counter" slice
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware), // Add the saga middleware to the store's middleware
});

// Run the counterSaga using the saga middleware
sagaMiddleware.run(counterSaga);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
