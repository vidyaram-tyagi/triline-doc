import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Triline Infotech',
  tagline: 'Documentation That Helps You Build, Use, and Succeed',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ✅ GitHub Pages production URL
  url: 'https://vidyaram-tyagi.github.io',

  // ✅ Repo name must be baseUrl
  baseUrl: '/triline-doc/',

  // ✅ GitHub Pages deployment config
  organizationName: 'vidyaram-tyagi',
  projectName: 'triline-doc',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',

          // ✅ Correct edit URL
          editUrl:
            'https://github.com/vidyaram-tyagi/triline-doc/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/vidyaram-tyagi/triline-doc/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Triline Infotech',
      logo: {
        alt: 'Triline Infotech',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'keypointsSidebar',
          position: 'left',
          label: 'Process',
        },
        {
          type: 'docSidebar',
          sidebarId: 'spiderSidebar',
          position: 'left',
          label: 'Spider',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ylacdcpSidebar',
          position: 'left',
          label: 'YLAC-DCP',
        },
        {
          type: 'docSidebar',
          sidebarId: 'qaprocessSidebar',
          position: 'left',
          label: 'QA process',
        },
        {to: '/blog', label: 'Blog', position: 'left'}

        // {
        //   href: 'https://github.com/vidyaram-tyagi/triline-doc',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vidyaram-tyagi/triline-doc',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Triline.
      Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
