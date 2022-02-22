export function friendlySeconds(secondsElapsed) {
	const formatter = new Intl.RelativeTimeFormat('en-GB', { numeric: 'auto' });
	if (secondsElapsed === 0) return formatter.format(0, 'seconds');
	const ranges = {
		years: 3600 * 24 * 365,
		months: 3600 * 24 * 30,
		weeks: 3600 * 24 * 7,
		days: 3600 * 24,
		hours: 3600,
		minutes: 60,
		seconds: 1
	};
	for (let key in ranges) {
		if (ranges[key] <= Math.abs(secondsElapsed)) {
			const delta = secondsElapsed / ranges[key];
			return formatter.format(Math.round(delta), key);
		}
	}
}
