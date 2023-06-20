export interface CounterState {
	/**
	 * The current count value.
	 */
	count: number;
	/**
	 * The status of the counter.
	 * Possible values: "idle", "loading", "failed".
	 */
	status: "idle" | "loading" | "failed";
}
