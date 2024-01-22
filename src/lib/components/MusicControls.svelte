<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { ButtonGroup, Button, Modal } from 'flowbite-svelte';
	import {
		BackwardStepSolid,
		PauseSolid,
		PlaySolid,
		ForwardStepSolid
	} from 'flowbite-svelte-icons';

	$: playActive = true;

	let songsList = $page.data.songList.songs.map((song) => {
		return { ...song, filepath: `/audio/${song.filepath}` };
	});
	let albumsList = $page.data.songList.albums.map((album) => {
		return {
			...album,
			art: album.art !== null ? `/images/albumArt/${album.art}` : null
		};
	});

	songsList.forEach((song) => {
		const matchingAlbum = albumsList.find((album) => song.album === album.id);
		if (matchingAlbum) {
			song.albumTitle = matchingAlbum.title;
			song.art = matchingAlbum.art;
		}
	});

	$: currentSongIndex = 0;

	let audioElement;
	let clickOutsideModal = false;

	// onMount(() => {
	// 	setTimeout(() => {
	// 		handlePlayPause();
	// 	}, 500);
	// });

	function handlePlayPause() {
		if (playActive === true) {
			playActive = false;
			audioElement.pause();
		} else {
			playActive = true;
			audioElement.play();
		}
	}

	function prev() {
		if (currentSongIndex === 0) {
			currentSongIndex = songsList.length - 1;
		} else {
			currentSongIndex -= 1;
		}
		if (playActive) {
			audioElement.oncanplay = () => {
				audioElement.play();
			};
		} else {
			audioElement.oncanplay = () => {
				audioElement.pause();
			};
		}
	}
	function next() {
		if (currentSongIndex === songsList.length - 1) {
			currentSongIndex = 0;
		} else {
			currentSongIndex += 1;
		}
		if (playActive) {
			audioElement.oncanplay = () => {
				audioElement.play();
			};
		} else {
			audioElement.oncanplay = () => {
				audioElement.pause();
			};
		}
	}
</script>

<audio src={songsList[currentSongIndex].filepath} bind:this={audioElement} autoplay />

<div class="flex flex-col">
	<div class="flex flex-row justify-center mb-1">
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events-->
		<img
			src={songsList[currentSongIndex].art !== null
				? songsList[currentSongIndex].art
				: `/images/albumArt/default.png`}
			alt={songsList[currentSongIndex].albumTitle}
			class="h-10 mr-5"
			on:click={() => (clickOutsideModal = true)}
		/>
		<ButtonGroup>
			<Button outline on:click={prev}>
				<BackwardStepSolid />
			</Button>
			<Button outline on:click={handlePlayPause}>
				<svelte:component this={playActive === true ? PauseSolid : PlaySolid} />
			</Button>
			<Button outline on:click={next}>
				<ForwardStepSolid />
			</Button>
		</ButtonGroup>
	</div>
	<div class="flex flex-col mb-2 mx-auto">
		<p class="text-white">{songsList[currentSongIndex].song_title}</p>
	</div>
</div>

<Modal
	bind:open={clickOutsideModal}
	autoclose
	outsideclose
	defaultClass="relative flex flex-col mx-auto bg-black"
>
	<div class="flex">
		<img
			src={songsList[currentSongIndex].art !== null
				? songsList[currentSongIndex].art
				: `/images/albumArt/default.png`}
			alt={songsList[currentSongIndex].albumTitle}
			class="h-60 mr-5"
		/>
		<div class="flex flex-col mx-auto my-auto">
			<p class="mx-auto">{songsList[currentSongIndex].song_title}</p>
			<p class="mx-auto">{songsList[currentSongIndex].artist}</p>
			<p class="mx-auto">{songsList[currentSongIndex].albumTitle}</p>
			<div class="mx-auto mt-3">
				<ButtonGroup>
					<Button outline on:click={prev}>
						<BackwardStepSolid />
					</Button>
					<Button outline on:click={handlePlayPause}>
						<svelte:component this={playActive === true ? PauseSolid : PlaySolid} />
					</Button>
					<Button outline on:click={next}>
						<ForwardStepSolid />
					</Button>
				</ButtonGroup>
			</div>
		</div>
	</div>
</Modal>

<style>
	img:hover {
		cursor: pointer;
	}
</style>
