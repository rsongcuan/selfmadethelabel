<script>
	import { Footer, FooterCopyright, FooterIcon } from 'flowbite-svelte';
	import { FacebookSolid } from 'flowbite-svelte-icons';
	import Icon from '@iconify/svelte';
	import MusicControls from './MusicControls.svelte';
</script>

<Footer class="absolute bottom-0 start-0 z-20 w-full bg-black" footerType="socialmedia">
	<div class="flex justify-center">
		<MusicControls />
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href="/" by="Selfmade the Label" />
		<div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
			<FooterIcon target="blank" href="https://www.facebook.com/profile.php?id=100062810091585">
				<FacebookSolid
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon target="blank" href="https://soundcloud.com/slimjordan">
				<Icon icon="mdi:soundcloud" />
			</FooterIcon>
		</div>
	</div>
</Footer>
