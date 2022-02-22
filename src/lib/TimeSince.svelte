<script>
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { friendlySeconds } from '$lib/helpers';
	export let time;
	let now = Date.now();

	$: secondsElapsed = now ? Math.round((time - now) / 1000) : 0;

	onMount(() => {
		const interval = setInterval(() => {
			now = Date.now();
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

{#if browser}
	{@html ' '}({friendlySeconds(secondsElapsed)})
{/if}
