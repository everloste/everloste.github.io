export const load = async ({ fetch }) => {
	const response = await fetch(`https://api.modrinth.com/v2/user/bebebea_loste/projects`);
	const projects = await response.json() as Array<{
		gallery: Array<{
			raw_url: string
		}>
		background_image: string,
		downloads: number,
		slug: string,
		link: string
	}>;

	projects.forEach(project => {
		if (project.gallery.length == 0) {
			project.background_image = "https://cdn.modrinth.com/data/hl5OLM95/images/389c2b7bce8e077df0846929c855f96a37612d50.png";
		}
		else {
			project.background_image = project.gallery[0].raw_url;
		}
		project.link = `https://modrinth.com/project/${project.slug}`
	});

	projects.sort((a, b) => b.downloads - a.downloads);

	return {
		projects
	};
};