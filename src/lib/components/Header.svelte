<script>
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar color="transparent" class="px-2 sm:px-4 pt-2.5 pb-0 w-full">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold text-white">
			Self-Made the Label Music
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
