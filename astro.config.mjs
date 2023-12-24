import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://thiagosoutogit.github.io',
	base: '/webdew',
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
						{ label: 'Astro', link: '/webdew/frontend/astro/' },
					],
				},
				{
					label: 'Backend',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Nest', link: '/webdew/backend/nest/' },
						{ label: 'Actix', link: '/webdew/backend/actix/' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Rust Programming language', link: '/webdew/guides/rust/' },
						{ label: 'C++', link: '/webdew/guides/cpp/' },

					],
				},
				{
					label: 'Challenges',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Cpp 16 games', link: '/webdew/challenges/cpp-games/' },
						{ label: 'Rust 16 games', link: '/webdew/challenges/rust-games/' },
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
