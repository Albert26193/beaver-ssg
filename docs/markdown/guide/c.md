# 计算机网络-TCP连接的三次握手

![image.png|xs](/beaver.png#30)
![image.png|s](/beaver.png#30)
![image.png|m](/beaver.png#30)
![image.png|l](/beaver.png#30)
![image.png|xl](/beaver.png#30)

<img src="https://img-20221128.oss-cn-shanghai.aliyuncs.com/img-2023-05/20231112230440.png" />

> this is the demo

**bold**

*ita*
## 1. ISN
- 在建立连接之初，通信双方都会各自选择一个序列号，称之为初始序列号。在建立连接时，通信双方通过 SYN 报文交换彼此的 ISN，如下图所示 

## 2. SYN报文交换

- 其中第 2 步和第 3 步可以合并一起，这就是三次握手的过程
---

## 3. 实例

### 3.1 例一

- 同步初始序列号的意义是什么，比如服务端接受了客户端的一个TCP段，TCP头部写着序号 2000。在此前，他们建立了三次握手机制，确定了客户端的ISN是200，那么下面的通信怎么展开？
  - 当客户端发送这个序列号为 2000 的 TCP 段时，服务器会将该序列号与当前预期的序列号进行比较。假设在这之前，服务器已经收到了序列号从 200 到 1999 的数据段，所以下一个预期的序列号为 2000。
  - 服务器成功接收序列号为 2000 的 TCP 段，并将其按序存储。然后，服务器会向客户端发送一个确认（ACK）消息，指示已经成功接收该 TCP 段，并期望收到下一个序列号。假设此 TCP 段的长度为 100 字节，那么 ACK 消息中的确认号（Acknowledge Number）将为 2100（2000 + 100）。
  - 客户端收到服务器的 ACK 消息后，会更新其自己的发送窗口，并根据需要发送后续的数据段。

### 3.2 例二


- 客户端的使用 ISN=2000 打开一个连接，服务器端使用 ISN=3000 打开一个连接，经过 3 次握手建立连接。连接建立起来以后，假定客户端向服务器发送一段数据 Welcome the server!（长度 20 Bytes），而服务器的回答数据 Thank you!（长度 10 Bytes ），试画出三次握手和数据传输阶段报文段序列号、确认号的情况。

- [ ] todo


`inline code`

```js
console.log('hello world')

export const rehypePluginShiki: Plugin<[Options], Root> = ({ highlighter }) => {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // <pre><code>...</code></pre>
      if (
        node.tagName === 'pre' &&
        node.children[0]?.type === 'element' &&
        node.children[0].tagName === 'code'
      ) {
        const codeNode = node.children[0];
        // console.log(codeNode);
        const codeContent = (codeNode.children[0] as Text).value;
        const codeClassName = codeNode.properties?.className?.toString() || '';

        const lang = codeClassName.split('-')[1];
        if (!lang) {
          return;
        }
        const highlightedCode = highlighter.codeToHtml(codeContent, { lang, theme: 'github-dark' });
        const fragmentAst = fromHtml(highlightedCode, { fragment: true });
        parent.children.splice(index, 1, ...fragmentAst.children);
      }
    });
  };
};

```

$latex$
$$\frac{n!}{k!(n-k)!} = \binom{n}{k}$$

```html
<head></head>
```
## 4. demo

- test
* test

| 1 | 2 |
| -- | -- |
| 1 | 2 |
| 3 | 4 |