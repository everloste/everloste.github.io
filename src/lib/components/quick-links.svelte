<div class="--quick-links">
	<a href="https://everloste.github.io/dptoolkit-web/" class="unformatted --quick-link-object">
		<div>
			<h3>
				Datapack Toolkit
			</h3>
			<p>
				A Minecraft datapack configuration tool.
			</p>
		</div>
	</a>
	<a href="https://everloste.github.io/mc-project-search/" class="unformatted --quick-link-object">
		<div>
			<h3>
				Minecraft Project Search
			</h3>
			<p>
				A tool for searching Modrinth and CurseForge for Minecraft projects.
			</p>
		</div>
	</a>
	<a href="https://everloste.github.io/mc-project-search/" class="unformatted --quick-link-object">
		<div>
			<h3>
				GitHub
			</h3>
			<p>
				My GitHub profile.
			</p>
		</div>
	</a>
	<a href="https://everloste.github.io/mc-project-search/" class="unformatted --quick-link-object">
		<div>
			<h3>
				CurseForge
			</h3>
			<p>
				My CurseForge profile.
			</p>
		</div>
	</a>
	<a href="https://everloste.github.io/mc-project-search/" class="unformatted --quick-link-object">
		<div>
			<h3>
				Modrinth
			</h3>
			<p>
				My Modrinth page.
			</p>
		</div>
	</a>
</div>

<style>
	.--quick-links {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-content: flex-start;
		gap: 1em;
	}
	.--quick-link-object {
		padding: 1em;
		backdrop-filter: brightness(1.25);
		transition: all 0.25s var(--ease-out-perfect);
		border: solid 1px transparent;
		flex: 1;
		min-width: 15em;
		max-width: 25em;
		h3 {
			margin: 0;
		}
		&:hover {
			color: var(--accent-color);
			flex: 1.25;
			backdrop-filter: brightness(1.5);
			border: solid 1px var(--accent-color);
			max-width: 40em;
		}
	}
</style>