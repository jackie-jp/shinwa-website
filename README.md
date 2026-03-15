# Shinwa Corporation Website

信和株式会社官方网站 - 基于 Next.js 构建的多语言企业官网。

## 预览

![Preview](./public/preview.png)

## 功能特性

- 🌐 多语言支持 (中文/英语/日语)
- 🎨 现代化设计，响应式布局
- 🌙 深色/浅色主题切换
- ⚡ 基于 Next.js 15 构建
- 💅 使用 Tailwind CSS 样式
- 🧩 集成 Shadcn UI 组件库
- 📦 Brix Framework 详情页展示

## 项目结构

```
shinwa-page/
├── app/                    # Next.js App Router
│   └── [locale]/           # 国际化路由
│       ├── page.tsx        # 首页
│       └── brix/           # Brix Framework 详情页
├── components/             # React 组件
│   ├── navbar/             # 导航栏组件
│   └── ui/                 # UI 基础组件
├── messages/               # 国际化翻译文件
│   ├── zh.json             # 中文
│   ├── en.json             # 英语
│   └── ja.json             # 日语
└── public/                 # 静态资源
    └── brix/               # Brix 相关图片
```

## 快速开始

1. 安装依赖:

```bash
pnpm install
```

2. 启动开发服务器:

```bash
pnpm dev
```

3. 打开 [http://localhost:3000](http://localhost:3000) 查看网站。

## 技术栈

- **框架**: Next.js 15
- **样式**: Tailwind CSS
- **组件库**: Shadcn UI
- **国际化**: next-intl
- **包管理**: pnpm

## 贡献者

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/jackie-jp">
        <img src="https://github.com/jackie-jp.png" width="80px;" alt="JSQ"/><br />
        <sub><b>JSQ</b></sub>
      </a>
    </td>
  </tr>
</table>

## 许可证

本项目仅供信和株式会社内部使用。
