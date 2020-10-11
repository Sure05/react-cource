import React, {useEffect, useState} from 'react';

export function useOnlineStatus() {
	const [isOnline, setIsOnline] = useState(null);

	useEffect(() => {
		setIsOnline(window.navigator.onLine)
		function updateOnlineStatus() {
			setIsOnline(window.navigator.onLine);
		}

		window.addEventListener('online',  updateOnlineStatus);
		window.addEventListener('offline', updateOnlineStatus);

		return () => {
			window.removeEventListener('online',  updateOnlineStatus);
			window.removeEventListener('offline', updateOnlineStatus);
		};
	}, []);

	return isOnline;
}