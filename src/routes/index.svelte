<script>
	import TimeSince from '$lib/TimeSince.svelte';
	export let build;
	export let imageUrls;

	const buildDate = new Date(build.date);
	const formattedBuildDate = buildDate.toLocaleDateString('en-GB', { dateStyle: 'long' });
	const formattedBuildTime = buildDate.toLocaleTimeString('en-GB', { timeStyle: 'medium' });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#each imageUrls as src}
	<img {src} alt="Uploaded pic" />
{/each}
<p>
	This page was built on <time datetime={buildDate.toISOString()}
		>{formattedBuildDate} at {formattedBuildTime}<TimeSince time={buildDate} /></time
	>.
</p>
