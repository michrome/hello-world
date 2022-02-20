<script>
	export let build;
	const buildDate = build.date;

	let timeNow = Date.now();
	setInterval(updateTime, 1000);
	function updateTime() {
		timeNow = Date.now();
	}

	let timeSinceBuild = timeAgo(buildDate);
	setInterval(updateTimeSinceBuild, 1000);
	function updateTimeSinceBuild() {
		timeSinceBuild = timeAgo(buildDate);
	}

	function timeAgo(input) {
		const date = input instanceof Date ? input : new Date(input);
		const formatter = new Intl.RelativeTimeFormat('en');
		const ranges = {
			years: 3600 * 24 * 365,
			months: 3600 * 24 * 30,
			weeks: 3600 * 24 * 7,
			days: 3600 * 24,
			hours: 3600,
			minutes: 60,
			seconds: 1
		};
		const secondsElapsed = (date.getTime() - Date.now()) / 1000;
		for (let key in ranges) {
			if (ranges[key] < Math.abs(secondsElapsed)) {
				const delta = secondsElapsed / ranges[key];
				return formatter.format(Math.round(delta), key);
			}
		}
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Time now: {timeNow}</p>
<p>Build date: {buildDate}</p>
<p>This page was built {timeSinceBuild}.</p>
