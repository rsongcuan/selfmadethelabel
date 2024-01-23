export async function load({ fetch }) {
	try {
		const images = await fetch('/api/getImages');
		let allImages = await images.json();
		let albumArtList = allImages.images
			.filter((image) => image.imagetype === 'albumArt')
			.map((image) => image.filename);
		let showsList = allImages.images
			.filter((image) => ['shows', 'events'].includes(image.imagetype))
			.map((image) => image.filename);
		return {
			albumArtList,
			showsList
		};
	} catch (error) {
		console.error('Error retrieving images for this page');
	}
}
