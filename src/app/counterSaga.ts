import { delay, put, takeEvery } from "redux-saga/effects";

import { asynchronous } from "./counterSlice";

function* incrementAsyncSaga(action: ReturnType<typeof asynchronous>) {
	yield delay(5000); // Simulate an asynchronous operation
	yield put(asynchronous(action.payload)); // Dispatch the increment action
}

export function* counterSaga() {
	yield takeEvery(asynchronous.type, incrementAsyncSaga);
}
