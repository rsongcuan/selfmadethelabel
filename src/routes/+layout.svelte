<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { particlesInit } from '@tsparticles/svelte';
	import { loadFull } from 'tsparticles';
	import ParticlesConfig from '$lib/components/config/particles-config.js';
	import { Svrollbar } from 'svrollbar';
	import { onMount } from 'svelte';

	let ParticlesComponent;

	/**
	 * @type {HTMLElement}
	 */
	export let viewport;
	/**
	 * @type {HTMLElement}
	 */
	export let contents;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');
		ParticlesComponent = module.default;
	});

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	void particlesInit(async (engine) => {
		// call this once per app
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadFull(engine);
	});
</script>

<div class="flex flex-col h-screen" id="wrapper">
	<header>
		<Header />
	</header>
	<!-- <div> -->
	<main class="flex-1 overflow-y-auto viewport mx-auto" bind:this={viewport}>
		<div bind:this={contents}>
			<slot />
		</div>
	</main>
	<!-- </div> -->
	<footer>
		<Footer />
	</footer>
	<Svrollbar {viewport} {contents} />
	<svelte:component
		this={ParticlesComponent}
		id="tsparticles"
		options={ParticlesConfig}
		on:particlesLoaded={onParticlesLoaded}
	/>
</div>

<style>
	.viewport::-webkit-scrollbar {
		/* hide scrollbar */
		display: none;
	}
	#wrapper {
		--svrollbar-thumb-background: #54178b;
	}
</style>
