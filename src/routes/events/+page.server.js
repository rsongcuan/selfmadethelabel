export async function load({ fetch }) {
	try {
		const events = await fetch('/api/getEvents');
		let eventsList = await events.json();
		return {
			eventsList
		};
	} catch (error) {
		console.error('Error retrieving events for this page');
	}
}
