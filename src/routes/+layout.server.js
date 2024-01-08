export async function load({ fetch }) {
	try {
		const songData = await fetch('/api/getSongs');
		let songList = await songData.json();
		songList.songs.sort((a, b) => a.song_number - b.song_number);
		return {
			songList
		};
	} catch (error) {
		console.error('Error retrieving songs for this page');
	}
}
