<script>
	import { ButtonGroup, Button } from 'flowbite-svelte';
	import {
		BackwardStepSolid,
		PauseSolid,
		PlaySolid,
		ForwardStepSolid
	} from 'flowbite-svelte-icons';

	$: playActive = false;
	$: hovered = false;

	function handleHover() {
		hovered === !hovered;
	}

	function handleClick() {
		playActive = !playActive;
	}
</script>

<ButtonGroup>
	<Button outline on:mouseover={handleHover} on:mouseout={handleHover}>
		<BackwardStepSolid />
	</Button>
	<Button outline on:click={handleClick}>
		<svelte:component this={playActive === true ? PauseSolid : PlaySolid} />
	</Button>
	<Button outline>
		<ForwardStepSolid />
	</Button>
</ButtonGroup>
