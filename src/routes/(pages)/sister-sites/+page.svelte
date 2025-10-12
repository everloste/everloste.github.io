<h1>> sister sites</h1>

<p>
	these are the websites of folks i know
	are amazing people and talented developers and creators!
</p>

<div id="site-list">
	<a class="site unformatted" href="https://mck.is">
		<div>
			<h2>
				<span class="ic">&gt;</span>
				mck.is
			</h2>
			<p>
				Autumn is an incredibly talented software developer with experience working at CERN.
			</p>
		</div>
	</a>
	<a class="site unformatted" href="https://rowandev.vercel.app">
		<div>
			<h2>
				<span class="ic">&gt;</span>
				rowandev.vercel.app
			</h2>
			<p>
				Rowan is an aspiring full-stack software developer based in the UK.
			</p>
		</div>
	</a>
</div>

<style>
	#site-list {
		margin-top: 1rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		.site:has(div) {
			> div {
				transition: all 0.25s var(--ease-out-perfect);
				background-color: var(--background-color-brighter);
				border: solid 1px transparent;
				padding: 1rem;
				h2, p, .ic {
					transition: all 0.25s var(--ease-out-perfect);
					margin-top: 0;
					margin-bottom: 0.5rem;
				}
				&:hover {
					background-color: var(--background-color-brightest);
					border: solid 1px var(--accent-color);
					.ic {
						margin-left: 0.75em;
						margin-right: 0.25em;
					}
				}
			}
		}
	}
</style>