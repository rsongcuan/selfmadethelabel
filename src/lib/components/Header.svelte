<script>
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar color="black">
	<NavBrand href="/">
		<!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
		<span class="self-center whitespace-nowrap text-xl font-semibold text-white">
			Selfmade the Label Music
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/spotlight">Spotlight</NavLi>
		<NavLi href="/events">Events</NavLi>
		<NavLi href="/music">Music</NavLi>
		<NavLi href="/shop">Shop</NavLi>
	</NavUl>
</Navbar>
