import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { counterSaga } from "./counterSaga";
import counterReducer from "./counterSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(counterSaga);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
