# vue3-admin-chanel

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### docs

```sh
npm run docs:dev
```

### 介绍 配置环境变量

```sh
npm run dev    开发环境
npm run sit    测试环境
npm run uat    预发环境
npm run prod   生成环境

目录介绍：

1、main.js
    指令导入
    ElementPlus-ui 导入中文等
    Pinia 状态管理 - 暂时没用

2、components
    Com+组件名 - ElementPlus 二次封装，适合不同业务场景
    
        ComDialog - 弹出（待）

        ComDrawer - 抽屉（完成）

        ComForm - 动态表单（30%）

        ComJsx - 测试jsx组件

        ComLayout - 页面结构（50%）

        ComMouse - 测试组件

        ComPageBreak - 分页（完成）

        ComPopover - 弹出tips（完成）

        ComTable - 表格（完成 - 待拓展）

        ComTablePage - 表格 + 分页（待 - 拓展）

        other - 其他

3、api
    接口请求，request.js
    requestState.js 组合式，简单处理所有接口成功失败的返回，可单独处理不同场景下的提示等

4、publicHandling
    可以抽离公共业务处理函数

5、src/index.js
    测试组件上传至npm - 远程包调用

6、stores
    (pinia) 公共状态库 似 vuex 

7、router
    可优化动态路由，根据后台返回，目前基础版

```
