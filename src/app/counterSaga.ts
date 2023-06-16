import { takeEvery, put, delay } from "redux-saga/effects";
import { asynchronous } from "./counterSlice";

function* asyncIncrementSaga(action: ReturnType<typeof asynchronous>) {
	try {
		// Introduce a delay using the `delay` effect
		yield delay(5000);
		// Dispatch an action to update the count by the specified amount
		yield put(asynchronous(action.payload));
	} catch (error) {
		// Handle any errors that occur during the asynchronous operation
		console.error("An error occurred:", error);
	}
}

export default function* counterSaga() {
	// Watch for the `asynchronous` action and trigger the corresponding saga
	yield takeEvery(asynchronous.type, asyncIncrementSaga);
}
