<script>
	import Image from '$lib/Image.svelte';
	import TimeSince from '$lib/TimeSince.svelte';
	export let build;
	export let imageUrls;

	const buildDate = new Date(build.date);
	const formattedBuildDate = buildDate.toLocaleDateString('en-GB', { dateStyle: 'long' });
	const formattedBuildTime = buildDate.toLocaleTimeString('en-GB', { timeStyle: 'medium' });
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
	<!-- Card with heading-->
	<div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
		<div class="px-4 py-5 sm:px-6 space-y-5 sm:space-y-4 ">
			<!-- Content goes here -->
			<!-- We use less vertical padding on card headers on desktop than on body sections -->
			<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">📸 InstaTAM</h2>
			<p class="text-l text-gray-500">
				This page was built on <time datetime={buildDate.toISOString()}
					>{formattedBuildDate} at {formattedBuildTime}<TimeSince time={buildDate} /></time
				>.
			</p>
		</div>
		<div class="px-4 py-5 sm:p-6">
			<!-- Content goes here -->
			<ul
				class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
			>
				{#each imageUrls as imageUrl}
					<Image {imageUrl} />
				{/each}
			</ul>
		</div>
	</div>
</div>
