<script>
	import Icon from '@iconify/svelte';
	import { Button, ButtonGroup } from 'flowbite-svelte';
</script>

<div class="grid justify-items-stretch">
	<div class="justify-self-center">
		<h1 class="text-white text-4xl col-start-2 col-span-4 mb-5">Coming Soon!</h1>
	</div>
	<div class="justify-self-center">
		<h3 class="text-white col-start-2 col-span-4 mb-5">
			In the meantime, check us out on Apple Music and Spotify
		</h3>
	</div>
	<div class="justify-self-center mb-5">
		<ButtonGroup>
			<Button
				href="https://music.apple.com/us/artist/young-bakes/1337476487"
				target="blank"
				color="alternative"
				size="xl"
			>
				<Icon icon="simple-icons:applemusic" height="40" />
				<div class="flex flex-col ml-2">
					<div>Open in</div>
					<div>Apple Music</div>
				</div>
			</Button>
			<Button
				href="https://open.spotify.com/artist/5uKA84TJFjFuZFmWPs7fxb"
				target="blank"
				color="alternative"
				size="xl"
			>
				<Icon icon="simple-icons:spotify" height="40" />
				<div class="flex flex-col ml-2">
					<div>Open in</div>
					<div>Spotify</div>
				</div>
			</Button>
		</ButtonGroup>
	</div>
</div>
