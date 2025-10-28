<h1 id="website-title">
    &gt; everloste.github.io
</h1>

<!-- <style>
    h1 {
        animation: typing 5s steps(44, end);
        overflow: hidden;
        white-space: nowrap;
    }
    @keyframes typing {
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
}
</style> -->

<script lang="ts">
	import { onMount } from 'svelte';

    let title = "     everloste.github.io";

    function typeLetter(el: HTMLHeadingElement, id: number) {
        if (title.length > 0) {
            el.innerText = el.innerText.concat(title.charAt(0));
            title = title.slice(1);
            if (el.innerText == ">e") {
                el.innerText = "> e";
            }
        }
        else {
            clearInterval(id);
        }
    }

	onMount(() => {
        const h1el = document.getElementById("website-title") as HTMLHeadingElement;
        h1el.innerText = "> ";
        const interval_id = setInterval(() => {
            typeLetter(h1el, interval_id);
        }, 50);
	});
</script>