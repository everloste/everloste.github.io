<script>
	export let data;
</script>

<h1>&gt; minecraft projects</h1>

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
				{project.downloads.toLocaleString() + " downloads on Modrinth"}
			</p>
			<div>
				<a href={project.link}>
					<button>
						Modrinth
					</button>
				</a>
				<button>
					CurseForge
				</button>
			</div>
		</div>
	{/each}
</div>