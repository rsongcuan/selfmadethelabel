<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Particles, { particlesInit } from '@tsparticles/svelte';
	import { loadFull } from 'tsparticles';
	import ParticlesConfig from '$lib/components/config/particles-config.js';
	import { onMount } from 'svelte';

	let ParticlesComponent;

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

<Header />
<div class="container mx-auto">
	<slot />
</div>
<Footer />
<!-- <Particles
	id="tsparticles"
	options={ParticlesConfig}
	on:particlesLoaded={onParticlesLoaded}
	{particlesInit}
/> -->
<svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	class="put your classes here"
	style=""
	options={ParticlesConfig}
	on:particlesLoaded={onParticlesLoaded}
/>
