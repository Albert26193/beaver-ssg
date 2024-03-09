# 功能特性

## 深色模式

- 本站点支持深色模式，可以在页面右上角切换深色模式。
- 代码主题也会随着深色模式的切换而切换。

## 代码高亮

- 代码高亮支持多种语言，支持行内高亮和代码块高亮。
- `line code` 行内高亮。
- 代码块高亮。
```javascript
console.log('hello world');
```
## `Markdown` 支持

- 按照主流的 `GitHub Flavored Markdown` 规范编写 `Markdown` 文件。

### `Markdown` 基本语法

- **加粗显示**
- *斜体显示*
- ***加粗斜体显示***
- ~~删除线~~
- [链接](https://github.com)

### 代码

- `行内代码 inline code`

```javascript
const demo = "hello world"
console.log(demo)
```

### 表格

| 标题1 | 标题2 | 标题3 |
|-------|:-----:|------:|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |

## 约定式路由

- 本项目使用 `约定式路由`，根据 `docs` 目录下的 `markdown` 文件自动生成路由。
- 一个文件对应一条路由，可以通过 `docs/.beaver/config.ts` 编辑具体的侧边栏规则，用以匹配路由。

## 热更新

- 执行 `npx beaver dev docs` 启动项目后，修改 `markdown` 文件后，会自动刷新页面。
- 能够做到一边编辑文档，一边预览效果。

## anchor 锚点

- 实现细颗粒度的锚点，可以通过 `#` 号后的标题名跳转到指定的标题。
- 便于快速匹配内容，提高阅读效率。

## 代码块复制

- 代码块支持复制，点击代码块右上角的 `copy` 按钮即可复制代码块。

```javascript
console.log('copy it now');
```

## 图片尺寸的指定

- 支持指定图片的尺寸，用以解决图片过大或过小的痛点。
- 在形如 `![image](./image.png)` 的图片标签中添加 `xs/s/m/l/xl` 即可指定图片的尺寸。
- 比如，`![image|xs](./image.png)`，表示图片的尺寸为 `extra small(xs)`。其他尺寸依次类推。

---

```text
# 图片尺寸的指定
![image|xs](./beaver.png)
```
- 下图为 `extra small(xs)` 尺寸的图片。
![image|xs](/beaver.png)
---
- 下图为 `small(s)` 尺寸的图片。
![image|s](/beaver.png)
---
- 下图为 `medium(m)` 尺寸的图片。
![image|m](/beaver.png)
