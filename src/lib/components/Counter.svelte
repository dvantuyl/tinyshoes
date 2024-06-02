<svelte:options customElement="my-counter" />

<script>
	import "@shoelace-style/shoelace/dist/components/button/button.js"
	let count = $state(0);

	function handleClick() {
		count += 1;
	}
</script>

<sl-button variant="primary" onclick={handleClick} onkeypress={handleClick} role='button' tabindex="0">
	Clicked {count} {count === 1 ? 'time' : 'times'}
</sl-button>
