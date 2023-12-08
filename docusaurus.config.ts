import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '수학대왕 아바타 슬랙 커맨드',
  tagline: '수학대왕은 너무 재밌어! 꾸에에에에!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mym0404.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/slack-avatar/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mym0404', // Usually your GitHub org/user name.
  projectName: 'slack-avatar-command', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '수학대왕 아바타는 너무 멋져!',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '어떻게 사용할까?',
        },
        {to: '/blog', label: '수학대왕 아바타는 뭘까?', position: 'left'},
        {
          href: 'https://github.com/mym0404/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '어떻게 사용할까?',
          items: [
            {
              label: '알아보자!!',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '더 알아보기',
          items: [
            {
              label: '수학대왕 아바타는 뭘까?',
              to: '/blog',
            },
            {
              label: '깃허브',
              href: 'https://github.com/mym0404/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MJ Studio.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
