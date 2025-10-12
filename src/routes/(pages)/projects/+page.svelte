<script>
	import image from "$lib/assets/dptoolkit-screenshot.png";
	import image2 from "$lib/assets/project-search-screenshot.png";
	import image3 from "$lib/assets/website-screenshot.png";
	import old_dptoolkit_screenshot from "$lib/assets/old-dptoolkit.png";
</script>

<h1>&gt; my projects</h1>

<p>
	here's a non-exhaustive list of my personal software projects!
	<br>
	these are primarily projects that are publicly available and
	i'm reasonably proud of - i have worked on a bit more for my cs studies, but for privacy and safety reasons those won't be listed.
</p>

<p>
	you can hold left click on the images to expand them!
</p>

<p>

</p>

<div id="my-project-list">
	<div class="project-div">
		<div class="project-text">
			<h2>
				This website
			</h2>
			<p>
				my personal website built with <a href="https://svelte.dev/docs/kit/introduction">SvelteKit</a> and hosted on <a href="https://docs.github.com/en/pages">GitHub</a>.
			</p>
			<p>
				primarily used for my blog, project pages, and other general stuff
				that lets you learn about me and my work.
			</p>
			<p>
				it uses <a href="https://svelte.dev/">Svelte</a> as the UI framework, <a href="https://www.typescriptlang.org/">TypeScript</a> for code, and otherwise
				vanilla CSS, which is my preference.
				i find that using the smallest amount of libraries is best
				for code cleanliness and performance.
			</p>
		</div>
		<img alt="A screenshot of this website." src="{image3}"/>
	</div>
	<div class="project-div">
		<div class="project-text">
			<h2>
				Datapack Toolkit
			</h2>
			<p>
				a client-side web app for configuring Minecraft data packs.
			</p>
			<p>
				it uses <a href="https://vite.dev/">Vite</a> and TypeScript, plus <a href="https://handlebarsjs.com/">Handlebars</a> and otherwise mostly vanilla HTML and CSS.
				it was built alongside <a href="https://mck.is/">Autumn</a>,
				who is an incredibly talented developer and amazing to work with!
			</p>
		</div>
		<img alt="A screenshot of Datapack Toolkit." src={image}/>
	</div>
	<div class="project-div">
		<div class="project-text">
			<h2>
				Minecraft Project Search
			</h2>
			<p>
				a client-side web app for searching both <a href="https://www.curseforge.com/">CurseForge</a> and <a href="https://www.modrinth.com/">Modrinth</a> for Minecraft projects at once.
			</p>
			<p>
				yet again uses Vite and TypeScript, and otherwise vanilla HTML and CSS.
				connects to Modrinth and CurseForge using their respective search APIs,
				then filters and sorts the results based on given criteria.
				it attempts to link CurseForge and Modrinth project pages,
				and combines project statistics from both sites.
			</p>
		</div>
		<img alt="A screenshot of the Minecraft Project Search web app." src={image2}/>
	</div>
	<div class="project-div">
		<div class="project-text">
			<h2>
				Datapack Toolkit Python Edition
			</h2>
			<p>
				the original version of Datapack Toolkit,
				an app for configuring Minecraft data packs and mods.
			</p>
			<p>
				it was built with Python and <a href="https://doc.qt.io/qtforpython-6/">Qt</a>,
				and later discontinued in favour of
				the new web app version.
			</p>
		</div>
		<img alt="A screenshot of the Datapack Toolkit desktop app." src={old_dptoolkit_screenshot}/>
	</div>

	<div class="project-div">
		<div class="project-text">
			<h2>
				My Minecraft mods
			</h2>
			<p>
				i have been creating Minecraft mods publicly since 2022 and privately since about 2020.
			</p>
			<p>
				they are single-handedly, and by far,
				my largest contribution to the world of creative content.
			</p>
			<p>
				you can check them all out <a href="/mc-projects">on this page.</a>
			</p>
		</div>
		<img alt="A screenshot of a forest in Minecraft." src="https://cdn.modrinth.com/data/hl5OLM95/images/22dc24219fe0b135c40709a37cd5afe43df2eff7.png"/>
	</div>
</div>

<style>
	#my-project-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		> .project-div {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			gap: 2rem;
			background-color: var(--background-color-brighter);
			padding: 2rem;

			&:nth-child(even) {
				flex-direction: row-reverse;
			}

			.project-text {
				width: 50%;
				transition: all 0.5s var(--ease-out-perfect);
				h2 {
					margin-top: 0;
				}
			}
			img {
				width: 50%;
				object-fit: cover;
				transition: all 0.5s var(--ease-out-perfect);
			}

			transition: all 0.5s var(--ease-out-perfect);

			&:hover {
				background-color: var(--background-color-brightest);
			}

			&:has(img:active) {
				> img {
					width: 100%;
				}
			}
		}
	}

	@media screen and (max-width: 720px) {
		#my-project-list {
			> .project-div {
				flex-direction: column-reverse;
				&:nth-child(even) {
					flex-direction: column-reverse;
				}
				img {
					width: 100%;
				}
				.project-text {
					width: 100%;
				}
			}
		}
	}
</style>