import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async () => {
	try {
		const events = await prisma.events.findMany();
		return new Response(
			JSON.stringify({
				events
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
				message: 'Something went wrong while fetching the events',
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
