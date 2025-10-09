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
</div>

<style>
	.--quick-links {
		display: flex;
		justify-content: stretch;
		gap: 1em;
	}
	.--quick-link-object {
		padding: 1em;
		backdrop-filter: brightness(1.25);
		transition: all 0.25s var(--ease-out-perfect);
		flex: 1;
		h3 {
			margin: 0;
		}
		&:hover {
			color: var(--accent-color);
			flex: 1.25;
			backdrop-filter: brightness(1.5);
		}
	}
</style>