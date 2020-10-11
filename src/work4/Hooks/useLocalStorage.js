import React, {useState} from "react";

export function useLocalStorage(key, initialValue) {
	const [data, setData] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (err) {
			console.warn("Setting localStorage went wrong: ", err);
			return initialValue;
		}
	});


	const setName = value => {
		try {
			const val = value instanceof Function ? value(data) : value;
			setData(val);
			window.localStorage.setItem(key, JSON.stringify(val));
		} catch (e) {
			console.log(e)
		}
	}
	return [data, setName]
}