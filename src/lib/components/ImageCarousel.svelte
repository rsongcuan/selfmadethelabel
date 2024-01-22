<script>
	import { Carousel, Thumbnails } from 'flowbite-svelte';
	export let images;

	let index = 0;
	let forward = true; // sync animation direction between Thumbnails and Carousel
</script>

<div class="max-w-7xl space-y-4">
	<Carousel
		{images}
		{forward}
		let:Indicators
		let:Controls
		bind:index
		imgClass="object-scale-down h-full w-fit rounded-sm"
	>
		<Controls class="text-purple-500" />
		<Indicators />
	</Carousel>
	<Thumbnails
		class="bg-transparent gap-3"
		let:Thumbnail
		let:image
		let:selected
		{images}
		{forward}
		bind:index
	>
		<Thumbnail
			{...image}
			{selected}
			class="rounded-md shadow-xl hover:outline hover:outline-primary-500 h-20"
			activeClass="outline outline-primary-400"
		/>
	</Thumbnails>
</div>
