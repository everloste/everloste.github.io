<script>
	// based on suggestions from:

	/**
	 * @typedef {Object} Props
	 * @property {any} header - Inclusive Components by Heydon Pickering https://inclusive-components.design/collapsible-sections/
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { header, children } = $props();
	let expanded = $state(false);

	let title_class = $state("title-unexpanded");

	function expand() {
		expanded = !expanded;
		if (expanded) title_class = "title-expanded";
		else title_class = "title-unexpanded";
	}
</script>

<div class="collapsible">
    <h3 class={title_class} id="title">
        <a href="" aria-expanded={expanded} onclick={expand}>
			{header}
		</a>
    </h3>
    <div class='contents' hidden={!expanded}>
        {@render children?.()}
    </div>
</div>

<style>
	h3 {
		transition: all 1ms ease-in-out;
		&.title-unexpanded {
			&::before {
				transition: all 1ms ease-in-out;
				content: "> ";
			}
		}
		&.title-expanded {
			&::before {
				transition: all 1ms ease-in-out;
				content: "> ";
			}
		}
	}
</style>