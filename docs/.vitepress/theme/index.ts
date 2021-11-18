
import Button from '../../../qzui/button/src/button'

// 使用vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/dist/client/theme-default'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
/**
 * register-components.js使用脚本自动创建
 * // package.json
 * "scripts": {
    "register:components": "vitepress-rc"
    }
 */
// 插件的主题
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('div', Button)
    registerComponents(app)
  }
}
