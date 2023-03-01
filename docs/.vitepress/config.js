import { defineConfig } from "vitepress";

const config = {
  title: "zy的日常笔记",
  description: "zy的日常笔记",
  base: "/blog23/",
  // srcDir: "./docs",
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
    //   { text: "Git 基本命令", link: "/git" },
    // ],
  },
};

export default defineConfig(config);
