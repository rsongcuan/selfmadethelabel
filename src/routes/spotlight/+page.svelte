<script>
	import { page } from '$app/stores';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';

	let albumPath = '/src/assets/images/albumArt/';
	let showsPath = '/src/assets/images/shows/';

	$: albumData = $page.data.albumArtList.body.map((image) => ({
		alt: image.split('.')[0],
		src: albumPath + image,
		title: image.split('.')[0]
	}));

	$: showsData = $page.data.showsList.body.map((image) => ({
		alt: image.split('.')[0],
		src: showsPath + image,
		title: image.split('.')[0]
	}));
</script>

<!-- <div class="flex justify-center"> -->
<Tabs
	style="underline"
	defaultClass="flex justify-center space-x-2 rtl:space-x-reverse"
	contentClass="flex p-4 bg-black rounded-lg mt-4 justify-center"
>
	<TabItem open title="Shows">
		<ImageCarousel images={showsData} />
	</TabItem>
	<TabItem title="Album Art">
		<ImageCarousel images={albumData} />
	</TabItem>
</Tabs>
<!-- </div> -->
