<script>
	import { fade } from 'svelte/transition';
	import "$lib/styles/main.css";
    import MyName from '$lib/components/snippets/my-name.svelte';
    import SocialsInline from '$lib/components/snippets/socials-inline.svelte';
	export let data;

	let time_string = "00:00";
	update_time();
	function update_time() {
		time_string = new Date(Date.now()).toLocaleTimeString("en-IE", {timeZone: "Europe/Zurich", timeStyle:"short"});
	}
	setInterval(update_time, 1000);
</script>

<!-- Background image -->
<!-- <img class="background-image" src="src/lib/assets/background.png"/> -->
<!-- <div class="testdiv"></div> -->

<!-- Children -->
{#key data.currentRoute}
	<main style="flex-grow: 1;" in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
		<slot />
	</main>
{/key}

<!-- Footer -->
<footer>
	<div class="footer-content technical-font">
		<div id="footer-line-1" class="less-important-text">
			<span style="text-align: left;">
				<svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>
				Zürich, <b>{time_string}</b>
			</span>
			<span style="flex-grow: 0;">
				site crafted by <MyName/> 🏳️‍⚧️ &lowast; <a href="/sister-sites">sister sites</a>
			</span>
			<span style="text-align: right;">
				<a href="https://github.com/everloste/everloste.github.io">
				<svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 70.7 176 0c26.5 0 48-21.5 48-48l0-22.7c-28.3-12.3-48-40.5-48-73.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 22.7c0 61.9-50.1 112-112 112l-176 0 0 70.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80S0 476.2 0 432c0-32.8 19.7-61 48-73.3l0-205.3C19.7 141 0 112.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
				source
				</a>
			</span>
		</div>
		<div id="footer-line-2">
			<SocialsInline/>
		</div>
	</div>
</footer>

<style>
	main {
		display: flex;
		flex-flow: column nowrap;
	}
	footer {
		font-size: 0.9rem;
		text-align: center;
		margin: 0 0;

		background-color: #beabee0d;
		border-radius: 2em 2em 0 0;
		border-top: solid 1px #beabee26;

		hr {
			margin: 1rem 0;
			margin-top: 0;
		}
		.footer-content {
			padding: 0 2em;
			padding-bottom: 1em;
			padding-top: 1em;
		}
	}
	#footer-line-1 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		> span {
			margin: 0;
			width: 33%;
		}
	}
	#footer-line-2 {
		margin-top: 0.5em;
	}

	/* DISPLAY FOR MOBILE PHONES */
	@media screen and (max-width: 512px) {
		#footer-line-1 {
			flex-direction: column;
			justify-content: left;
			row-gap: 0.25em;
			> span {
				width: 100%;
				text-align: left !important;
			}
		}
		#footer-line-2 {
			text-align: left !important;
		}
	}
</style>