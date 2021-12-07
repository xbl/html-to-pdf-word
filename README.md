# html 2 word & pdf

### 开始

首先你需要安装 Nodejs 环境，在目录中执行：


```shell
npm install
```

### 转 pdf 和 doc

```shell
npm start
```

### 说明

#### 转 PDF

Demo 中的代码使用 [puppeteer](https://www.npmjs.com/package/puppeteer) 无头浏览器渲染 `template/template.html` ，将渲染出来的HTML 导出PDF，导出效果与在网页中打印预览的效果基本相同。值得注意的是部分样式可能在PDF 中不生效需要增加 `-webkit-print-color-adjust: exact;` 。

#### 转 Word

Html 转 word 几乎没有找到合适的第三方库，尝试 [html-to-docx](https://www.npmjs.com/package/html-to-docx) 库，在设置背景色和其他样式上格式会乱。

于是找到了下面链接：

https://www.codexworld.com/export-html-to-word-doc-docx-using-javascript/

设置 HTML 的 `xmlns` 将文件保存成 `.doc` 即可。

##### 缺点

* 样式需要 inline 编写，不能使用 class，这点与编写邮件中的HTML有些类似。

* 生成的 word 需要另存为 `.docx`再编辑，否则会弹出各种提示且无法保存。

html 设置页眉、页脚尚未成功，参考：
https://stackoverflow.com/questions/13340216/html-generated-microsoft-word-document-with-header-footer-and-watermark

#### 当前进展

- [x] Html 转 PDF
- [x] Html 转 Doc
- [ ] Word 设置 Header、Footer
- [ ] PDF 设置 Header、Footer
- [ ] Html 转 Doc 后编辑无需另存为 Word

