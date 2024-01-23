import fs from 'fs/promises';
import { json } from '@sveltejs/kit';

export async function GET() {
	const imagesDirectory = 'images/albumArt';
	try {
		const imageList = await fs.readdir(imagesDirectory);
		return json({
			body: imageList
		});
	} catch (error) {
		console.error('Error reading image files:', error);
		return json({
			status: 500,
			body: { error: 'Internal Server Error' }
		});
	}
}
