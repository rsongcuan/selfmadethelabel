import fs from 'fs/promises';
import path from 'path';
import { json } from '@sveltejs/kit';

export async function GET() {
	const imagesDirectory = 'static/images/shows';
	try {
		const imageList = await fs.readdir(path.resolve(imagesDirectory));
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
