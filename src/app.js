// 通用入口文件：创建vue实例

import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'

// 每次请求生成单个实例
export function createApp() {
    const router = createRouter()
    const app = new Vue({
        router,
        render: h => h(App)
    })
    
    return {app, router}
}