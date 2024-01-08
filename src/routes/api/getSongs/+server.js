import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async () => {
	try {
		const songs = await prisma.songs.findMany();
		const albums = await prisma.albums.findMany();
		return new Response(
			JSON.stringify({
				songs,
				albums
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				message: 'Something went wrong while fetching the songs',
				error
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
};
