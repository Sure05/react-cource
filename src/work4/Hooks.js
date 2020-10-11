import React, {Fragment, useEffect} from "react";
import {useDocumentTitle} from "./Hooks/useDocumentTitle";
import {useOnlineStatus} from "./Hooks/useOnlineStatus";
import {useLocalStorage} from "./Hooks/useLocalStorage";

function Hooks() {
	const [name, setName] = useLocalStorage('name', 'BobTailer');

	// useDocumentTitle('New Title')
	// const status = useOnlineStatus();

	useEffect(() => {
		setName('asdasasdasdd');
	}, [name]);
	// console.log(name)
	return (
		<div />
	)
}

export default Hooks;