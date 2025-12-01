import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tools Review",
  description: "In-depth reviews of interesting online tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Reviews", link: "/reviews/index" },
    ],

    sidebar: [
      {
        text: "Latest Reviews",
        items: [
          { text: "All Reviews", link: "/reviews/index" },
          { text: "Best Arrow Spinner Online", link: "/reviews/arrow-spinner" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/" }],
  },
});
