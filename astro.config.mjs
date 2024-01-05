import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// import vue from "@astrojs/vue";
//
// import vuetifyplugin from 'vite-plugin-vuetify';
//
// /**
//  * vuetify integration for astro
//  * @param {import('astro/config').options} options
//  * @returns {import('astro/config').astrointegration}
//  */
// function vuetify(options) {
//   return {
//     name: 'my-astro-vuetify-integration',
//     hooks: {
//       'astro:config:setup': ({ updateconfig }) => {
//         updateconfig({
//           vite: {
//             ssr: {
//               noexternal: ['vuetify'],
//             },
//             plugins: [vuetifyplugin()],
//           },
//         });
//       },
//     },
//   }
// }





// https://astro.build/config
export default defineConfig({
  site: 'https://thiagosoutogit.github.io',
  base: '/webdew',
  integrations: [starlight({
    title: 'Web Dewelopment',
    social: {
      github: 'https://github.com/thiagosoutogit'
    },
    sidebar: [{
      label: 'Frontend',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Astro',
        link: '/frontend/astro/'
      }]
    }, {
      label: 'Backend',
      items: [
      // Each item here is one entry in the navigation menu.
        {
          label: 'Go backend',
          link: '/backend/go/'
        },
      {
        label: 'Nest',
        link: '/backend/nest/'
      }, {
        label: 'Actix',
        link: '/backend/actix/'
      }]
    }, {
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Rust Programming language',
        link: '/guides/rust/'
      }, {
        label: 'C++',
        link: '/guides/cpp/'
      }]
    }, {
      label: 'Challenges',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Cpp 16 games',
        link: '/challenges/cpp-games/'
      }, {
        label: 'Rust 16 games',
        link: '/challenges/rust-games/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  })],

    // tailwind(), vue(), vuetify({
  //   components: {
  //     VBtn,
  //   },
  // }
  // )]
 });