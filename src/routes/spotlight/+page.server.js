import fs from 'fs/promises';
import { json } from '@sveltejs/kit';

export async function load() {
	try {
		console.log(await fs.readdir('public'));
		const albumArtList = await fs.readdir('public/images/albumArt');
		const showsList = await fs.readdir('public/images/shows');
		console.log(albumArtList, showsList);
		return {
			albumArtList,
			showsList
		};
	} catch (error) {
		console.error('Error reading image files:', error);
		return {
			status: 500,
			body: { error: 'Internal Server Error' }
		};
	}
}
