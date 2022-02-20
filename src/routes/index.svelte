<script>
	export let build;
    const buildDate = build.date;

	let timeNow = Date.now();
    setInterval(updateTime, 1000);
	function updateTime() {
		console.log('updateTime ran');
		timeNow = Date.now();
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Time now: {timeNow}</p>
<p>Build date: {buildDate}</p>
