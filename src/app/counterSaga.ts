import { delay, put, takeEvery } from "redux-saga/effects";

import { incrementAsync, incrementAsyncFailure, incrementAsyncSuccess } from "./counterSlice";

// Saga function to handle the incrementAsync action
function* incrementAsyncSaga(action: ReturnType<typeof incrementAsync>) {
	try {
		yield delay(5000); // Simulate an asynchronous operation with a delay of 5 seconds
		yield put(incrementAsyncSuccess(action.payload)); // Dispatch the success action with the payload
	} catch (error) {
		yield put(incrementAsyncFailure()); // Dispatch the failure action
	}
}

// Root saga function to watch for the incrementAsync action and run the corresponding saga
export function* counterSaga() {
	yield takeEvery(incrementAsync.type, incrementAsyncSaga);
}
