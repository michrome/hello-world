<script>
	export let build;
	const buildDate = build.date;

	let timeNow = Date.now();
	setInterval(updateTime, 1000);
	function updateTime() {
		timeNow = Date.now();
	}

	//console.log(buildDate);
	let timeSinceBuild = timeAgo(buildDate);
	//console.log(timeSinceBuild);
	updateTimeSinceBuild();
	function updateTimeSinceBuild() {
		timeSinceBuild = timeAgo(buildDate);
		setTimeout(updateTimeSinceBuild, 1000);
	}

	// const date2 = new Date('1995-12-17T03:24:00');
	const no_time = timeAgo(new Date('2022-02-20T11:20:00'), new Date('2022-02-20T11:20:00'));
	const one_sec = timeAgo(new Date('2022-02-20T11:20:00'), new Date('2022-02-20T11:20:01'));
	const five_nine_sec = timeAgo(new Date('2022-02-20T11:20:00'), new Date('2022-02-20T11:20:59'));
	const six_o_sec = timeAgo(new Date('2022-02-20T11:20:00'), new Date('2022-02-20T11:21:00'));
	const five_nine_min = timeAgo(new Date('2022-02-20T11:20:00'), new Date('2022-02-20T12:19:00'));
	const five_nine_min_five_nine = timeAgo(
		new Date('2022-02-20T11:20:00'),
		new Date('2022-02-20T12:19:59')
	);
	const one_hour = timeAgo(new Date('2022-02-20T11:20:00'), new Date('2022-02-20T12:20:00'));

	function timeAgo(input, now = Date.now()) {
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
		const secondsElapsed = (date - now) / 1000;
		for (let key in ranges) {
			if (Math.abs(secondsElapsed) < 1) {
				return '***NOW***';
			}
			if (ranges[key] <= Math.abs(secondsElapsed)) {
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
<p>no_time: {no_time}</p>
<p>one_sec: {one_sec}</p>
<p>five_nine_sec: {five_nine_sec}</p>
<p>six_o_sec: {six_o_sec}</p>
<p>five_nine_min: {five_nine_min}</p>
<p>five_nine_min_five_nine: {five_nine_min_five_nine}</p>
<p>one_hour: {one_hour}</p>
