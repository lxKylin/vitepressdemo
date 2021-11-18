module.exports = {
  title: 'Kylin',
  description: 'Just playing around.',
  lang: 'en-US',
  themeConfig: {
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    nav: [
      {
        text: '指南',
        link: '/',
      },
      {
        text: '组件',
        link: '/components/',
      },
      {
        text: '资源',
        link: '/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/lxKylin/vitepressdemo',
      },
    ],
    sidebar: {
      '/': getDemoSidebar(),
    }
  },
  markdown: {
    config: (md) => {
      const {
        demoBlockPlugin
      } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    },
    lineNumbers: true
  }
}

function getDemoSidebar() {
  return [
    {
      text: "介绍"
    },
    {
      text: "更新日志",
      children: [{
        text: "新特性",
        link: "/components/log/"
      }]
    },
    {
      text: "开发指南",
      children: [{
        text: "安装"
      }]
    },
    {
      text: "快速开始",
      link: "/"
    },
    {
      text: "基础组件",
      children: [{
          text: "Button 按钮",
          link: "/components/button/"
        },
        {
          text: "Icon 图标",
          link: "/components/icon/"
        },
      ],
    },
    {
      text: "配置组件",
    },
    {
      text: "Form 表单组件",
    },
    {
      text: "Data 数据展示",
    },
  ]
}