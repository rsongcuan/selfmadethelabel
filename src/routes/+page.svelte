<script>
	import { Video } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	$: videoPlaying = false;

	onMount(() => {
		videoPlaying = true;
		setTimeout(() => {
			videoPlaying = false;
		}, 8000);
	});
</script>

{#if videoPlaying}
	<div transition:fade={{ delay: 250, duration: 300 }} class="flex justify-center h-svh">
		<Video src="/audio/mojo_video.mp4" autoplay controls />
	</div>
{:else}
	<div transition:fade={{ delay: 0, duration: 300 }} class="flex justify-center">
		<img
			src="/images/albumArt/launch_times_and_spaceships.png"
			alt="launch_times_and_spaceships"
			class="h-auto w-8/12"
		/>
	</div>
	<div transition:fade={{ delay: 0, duration: 300 }} class="flex justify-center mt-5">
		<h1 class="text-white text-5xl">Available Now!</h1>
	</div>
{/if}
