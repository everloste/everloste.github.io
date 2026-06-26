<script>
	export let data;
</script>

<h1>minecraft projects</h1>

<p>
	this is a list of all my released Minecraft projects,
	including mods, data packs, and resource packs.
	if you like my work,
	please do consider <a href="/ko-fi">supporting me</a>
	to make this ever so slightly more feasible to do in the long term.
</p>

<p>
	fun fact: as of today, my projects have a total of <b class="pronouns">{data.total_downloads.toLocaleString("en-IE")}</b> downloads on CurseForge and Modrinth.
</p>

<p>

</p>

<style>
	#project-list {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
	.--project-div {
		padding: 1em 2em;
		padding-top: 1em;
		border: solid 1px #292C3C;
		overflow: hidden;
		height: auto;
		position: relative;
		background: none;
		backdrop-filter: brightness(1);

		transition: all 0.25s var(--ease-out-perfect);

		display: flex;
		flex-direction: column;
		gap: 1em;

		h2 {
			margin: 0;
		}

		p {
			margin: 0;
		}

		> #--background {
			position: absolute; 
			z-index: -1;
			inset: 0;
			width:  inherit;
			height: inherit;
			background-image: url("https://cdn.modrinth.com/data/hl5OLM95/images/389c2b7bce8e077df0846929c855f96a37612d50.png");
			background-size: cover;
			background-position: 25% 25%;
			filter: opacity(0.25) blur(0px);
			transition: all 0.5s var(--ease-out-perfect);
		}

		&:hover {
			backdrop-filter: brightness(1.25);
			border: solid 1px var(--accent-color);
			overflow: visible;
			> #--background {
				filter: opacity(0.5) blur(12px);
			}
		}
	}
</style>

<div id="project-list">
	{#each data.projects as project}
		<div class="--project-div">
			<div id="--background" style='background-image: url({project.background_image});'></div>
			<h2>
				{project.title}
			</h2>
			<p>
				{project.description}
			</p>
			<p>
				<b>{project.downloads.toLocaleString("en-IE")}</b> downloads
			</p>
			<div>
				<a href={project.link}>
					<button>
						Modrinth
					</button>
				</a>
				<a href={project.cf_link}>
					<button>
						CurseForge
					</button>
				</a>
			</div>
		</div>
	{/each}
</div>