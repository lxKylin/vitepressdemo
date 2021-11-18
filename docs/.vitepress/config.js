module.exports = {
  title: 'Kylin',
  description: 'Just playing around.',
  lang: 'en-US',
  themeConfig: {
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    nav: [{
        text: 'Guide',
        link: '/',
        activeMatch: '^/$|^/guide/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/lxKylin',
        activeMatch: '^/$|^/guide/'
      },
    ],
    sidebar: {
      '/': getDemoSidebar(),
    }
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const {
        demoBlockPlugin
      } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
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
      text: "布局组件",
    },
  ]
}