<script>
	import dayjs from 'dayjs';
	import { InlineCalendar, themes } from 'svelte-calendar';
	import { Card } from 'flowbite-svelte';

	export let data;
	let store;
	const allEvents = data?.eventsList?.events ?? [];
	const { dark: theme } = themes;
	const today = dayjs().format('MM/DD/YYYY');

	$: event = data?.eventsList?.events?.find(
		(event) =>
			dayjs(event.eventdate.split('T')[0]).format('MM/DD/YYYY') ===
			dayjs($store?.selected).format('MM/DD/YYYY')
	);
	// boolean if there is an event scheduled on selected date
	$: eventScheduledToday = data?.eventsList?.events?.some(
		(event) =>
			dayjs(event.eventdate.split('T')[0]).format('MM/DD/YYYY') ===
			dayjs($store?.selected).format('MM/DD/YYYY')
	);
	// boolean if there are any events scheduled after today
	$: upcomingEventsScheduled = data?.eventsList?.events?.some(
		(event) => dayjs(event.eventdate.split('T')[0]).format('MM/DD/YYYY') > today
	);
</script>

<div class="grid grid-cols-2">
	<div>
		<InlineCalendar bind:store {theme} />
	</div>
	<div class="mx-auto">
		<Card class="bg-gray-800 mb-5">
			<h1 class="text-primary-500 text-4xl text-center mb-2">Events</h1>
			<hr />
			<h1 class="text-primary-500 text-3xl text-center mt-5 mb-1">
				{dayjs($store?.selected).format('MM/DD/YYYY')}
			</h1>
			{#if eventScheduledToday}
				{#if event.art !== null && event.art !== undefined}
					<img src={'/src/assets/images/events/' + event.art} alt="promo" title="promo" />
				{/if}
				<h3 class="text-primary-500">{event.title}</h3>
				<h3 class="text-primary-500">{event.eventlocation}</h3>
				<h3 class="text-primary-500">{event.eventaddress}</h3>
				<h3 class="text-primary-500">{event.eventcity}, {event.eventstate}</h3>
			{:else}
				<h1 class="text-primary-500">No events scheduled for the selected date</h1>
			{/if}
		</Card>
		{#if !eventScheduledToday}
			<Card class="bg-gray-800 mb-5">
				<h1 class="text-primary-500 text-4xl text-center mb-2">Upcoming Events</h1>
				<hr />
				{#if allEvents.length > 0 && upcomingEventsScheduled}
					{#each allEvents as futureEvent}
						{@const eventDate = dayjs(futureEvent.eventdate.split('T')[0]).format('MM/DD/YYYY')}
						{#if eventDate > today}
							<h2 class="text-primary-500 mt-2">
								{eventDate}
							</h2>
							<h3 class="text-primary-500">{futureEvent.title}</h3>
							<h3 class="text-primary-500">{futureEvent.eventlocation}</h3>
							<h3 class="text-primary-500">{futureEvent.eventaddress}</h3>
							<h3 class="text-primary-500">{futureEvent.eventcity}, {futureEvent.eventstate}</h3>
						{/if}
					{/each}
				{:else}
					<h3 class="text-primary-500">No upcoming events scheduled at this time</h3>
				{/if}
			</Card>
		{/if}
	</div>
</div>
