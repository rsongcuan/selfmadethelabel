export async function load({ fetch }) {
	try {
		const albumArt = await fetch('/api/getImages/albumArt');
		let albumArtList = await albumArt.json();
		const shows = await fetch('/api/getImages/shows');
		let showsList = await shows.json();
		return {
			albumArtList,
			showsList
		};
	} catch (error) {
		console.error('Error retrieving images for this page');
	}
}
