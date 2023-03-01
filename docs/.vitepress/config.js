import { defineConfig } from "vitepress";

const config = {
  title: "zy的日常笔记",
  description: "zy的日常笔记",
  base: "/zyblog/",
  // outDir: "../root",
  appearance: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    siteTitle: "zyblog",
    sidebar: [
      { text: "Git 基本命令", link: "/git" },
      { text: "HTTP Code", link: "/http-code" },
      { text: "VSCode 常用插件", link: "/vscode-plugins" },
      { text: "React 日常问题总结", link: "/react" },
    ],
    // nav: [
    //   { text: "git", link: "/git" },
    //   {
    //     text: "Dropdown Menu",
    //     items: [
    //       { text: "Item A", link: "/item-1" },
    //       { text: "Item B", link: "/item-2" },
    //       { text: "Item C", link: "/item-3" },
    //     ],
    //   },
    // ],
  },
};

export default defineConfig(config);
