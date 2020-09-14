import { useEffect, useState } from "react";
import { useInputEvent } from "./useInputEvent";

export const useSecretCode = (secretCode) => {
	const [count, setCount] = useState(0);
	const [success, setSuccess] = useState(false);
	const key = useInputEvent();

	useEffect(() => {
		// ignore keyup
		if (key == null) return;

		// reset if invalid key
		if (key !== secretCode[count]) {
			setCount(0);
			return;
		}

		// valid key
		setCount((state) => state + 1);

		// code complete
		if (count + 1 === secretCode.length) {
			setSuccess(true);
		}
	}, [key]);

	return success;
};
