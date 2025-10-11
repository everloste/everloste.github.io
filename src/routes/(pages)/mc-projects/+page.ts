export const load = async ({ fetch }) => {
	const response = await fetch(`https://api.modrinth.com/v2/user/bebebea_loste/projects`);
	const cf_response = await fetch(`https://www.curseforge.com/api/v1/mods/by-user-id/102951183?index=0&pageSize=50&sortOrder=Desc&sortField=TotalDownloads`);
	const projects = await response.json() as Array<{
		gallery: Array<{
			raw_url: string
		}>
		background_image: string,
		downloads: number,
		slug: string,
		link: string,
		cf_link: string,
		title: string
	}>;
	const cf_projects = await cf_response.json() as {
		data: Array<{
			slug: string,
			name: string,
			downloads: number,
			class: {
				url: string
			}
		}>
	};
	let total_downloads = 0;

	projects.forEach(project => {
		if (project.gallery.length == 0) {
			project.background_image = "https://cdn.modrinth.com/data/hl5OLM95/images/389c2b7bce8e077df0846929c855f96a37612d50.png";
		}
		else {
			project.background_image = project.gallery[0].raw_url;
		}
		project.link = `https://modrinth.com/project/${project.slug}`
		const cf_equivalent = cf_projects.data.find(
			(value) => {return (value.slug == project.slug) || (value.name == project.title)}
		);
		if (cf_equivalent != undefined) {
			project.cf_link = cf_equivalent.class.url + "/" + cf_equivalent.slug;
			project.downloads += cf_equivalent.downloads;
		}
		total_downloads += project.downloads;
	});

	projects.sort((a, b) => b.downloads - a.downloads);

	return {
		projects,
		total_downloads
	};
};