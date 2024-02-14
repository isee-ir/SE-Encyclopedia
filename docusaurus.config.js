const organizationName = "isee-ir";
const projectName = "TAs-Encyclopedia";
const url = `https://${organizationName}.github.io`;
const baseUrl = `/${projectName}/`;

module.exports = {
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  organizationName,
  projectName,
  i18n: {
    defaultLocale: "fa",
    locales: ["fa", "en"],
    localeConfigs: {
      'fa': {
        label: "فارسی",
        direction: "rtl"
      },
      'en': {
        label: "English",
        direction: "ltr"
      }
    }
  },
  title: 'دانش‌نامه دستیاران آموزشی',
  tagline: 'دستیاری بهتر، آموزش باکیفیت‌تر',
  url: 'https://docusaurus-2.netlify.com',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'massoudmaboudi', // Usually your GitHub org/user name.
  projectName: 'datagit_v2.docusaurus', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // onBrokenMarkdownLinks:'ignore',
  favicon: 'img/favicon.ico',
  themeConfig: {
    // Relative to your site's "static" directory.
    // Cannot be SVGs. Can be external URLs too.
    image: 'img/metaImage.png',
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      disableSwitch: true,

      // Important to enforce light mode
      respectPrefersColorScheme: false,
    },
    navbar: {

      title: 'دانش‌نامه دستیاران آموزشی',
      logo: {
        alt: 'لوگو',
        src: 'img/logo.png',
        // srcDark: 'img/logo_dark.svg', // Default to `logo.src`.
        // href: 'https://datagit.ir/', // Default to `siteConfig.baseUrl`.
        // target: '_self', // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
      },
      items: [
        {
          label: 'رشته‌های تحصیلی',
          position: 'left',
          items: [
            {
              label: 'مهندسی کامپیوتر',
              to: 'docs/majors/computer-engineering/',
            },
            {
              to: 'docs/majors/electrical-engineering/',
              label: 'مهندسی برق',
            },
            {
              to: 'docs/majors/computer-sciense/',
              label: 'علوم کامپیوتر',
            },
          ]
        },
        {
          label: 'دانش معلمی',
          position: 'left',
          to: 'docs/teaching/',
        },
        {
          to: 'blog',
          label: 'وبلاگ',
          position: 'left'
        },
        {
          to: "contactus",
          label: "تماس با من",
          position: "right",
        },
        {
          type: 'localeDropdown',
          position: 'right'
        }
      ],
    },
    footer: {
      // style: 'light',
      // logo: {
      //   alt: 'لوگو',
      //   src: 'img/logo.png',
      //   href: url,
      // },
      copyright: `انجمن آموزشی مهندسی ایران`,
    },

    // CodeBlock Theme,
    // By default, we use Palenight as syntax highlighting theme.
    prism: {
      additionalLanguages: ['r'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'وبلاگ دستیاران آموزشی!',
          blogDescription: 'جایی برای خواندن تجربیات دستیاران آموزشی',
          showReadingTime: true,
          blogSidebarTitle: 'مطالب اخیر'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap',
        changefreq: 'weekly',
        priority: 0.5
      },
    ],
  ],
  scripts: [
  ],
};
