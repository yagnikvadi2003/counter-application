import { all } from "redux-saga/effects";
import counterSaga from "./counterSaga";

export default function* rootSaga() {
	yield all([
		counterSaga(),
		// Add more sagas here if you have any
	]);
}
