import fs from 'fs/promises';
import { json } from '@sveltejs/kit';

export async function load() {
	try {
		const albumArtList = await fs.readdir('public/images/albumArt');
		const showsList = await fs.readdir('public/images/shows');
		return {
			albumArtList,
			showsList
		};
	} catch (error) {
		console.error('Error reading image files:', error);
		return json({
			status: 500,
			body: { error: 'Internal Server Error' }
		});
	}
}
