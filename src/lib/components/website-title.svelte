<h1 id="website-title">
	everloste.github.io
</h1>

<h2>
	the fox's den
</h2>

<style>
	h1 {
		margin-bottom: 0;
	}
	h2 {
		margin-top: 0;
		margin-bottom: 1.5em;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';

	let title = "     everloste.github.io";

	function typeLetter(el: HTMLHeadingElement, id: number) {
		if (title.length > 0) {
			el.innerText = el.innerText.concat(title.charAt(0));
			title = title.slice(1);
			if (el.innerText == "e") {
				el.innerText = "e";
			}
		}
		else {
			clearInterval(id);
		}
	}

	onMount(() => {
		const h1el = document.getElementById("website-title") as HTMLHeadingElement;
		h1el.innerText = "";
		const interval_id = setInterval(() => {
			typeLetter(h1el, interval_id);
		}, 50);
	});
</script>