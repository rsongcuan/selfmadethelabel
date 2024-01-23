<script>
	import { page } from '$app/stores';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';

	$: albumData = $page.data.albumArtList.map((image) => ({
		alt: image.split('.')[0],
		src: `/images/albumArt/${image}`,
		title: image.split('.')[0]
	}));

	$: showsData = $page.data.showsList.map((image) => ({
		alt: image.split('.')[0],
		src: `/images/shows/${image}`,
		title: image.split('.')[0]
	}));
</script>

<!-- <div class="flex justify-center"> -->
<Tabs
	style="underline"
	defaultClass="flex justify-center space-x-2 rtl:space-x-reverse start-0 bottom-1"
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
