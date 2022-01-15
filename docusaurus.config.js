// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CS50 in Hindi',
  tagline: 'A CS Cult now in hindi',
  url: 'https://cs50.kalsotra.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kryg0n', // Usually your GitHub org/user name.
  projectName: 'cs50', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kryg0n/cs50/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      hideableSidebar: true,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'CS50 in Hindi',
        hideOnScroll: true,
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.png',
        },
        items: [
         {
            href: 'https://github.com/kryg0n/cs50',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Videos',
            items: [
              {
                label: 'Coming soon...',
                to: '#',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/cs50',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/cs50',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/cs50',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Welcome',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kryg0n/cs50',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Compiled & Translated by Maanit.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
