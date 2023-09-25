import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://thiagosoutogit.github.io',
	integrations: [
		starlight({
			title: 'Web Dewelopment',
			social: {
				github: 'https://github.com/thiagosoutogit',
			},
			sidebar: [
				{
					label: 'Frontend',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Astro', link: '/frontend/astro/' },
					],
				},
				{
					label: 'Backend',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Nest', link: '/backend/nest/' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
