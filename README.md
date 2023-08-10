今日诗词API 是一个可以免费调用的诗词接口：[https://www.jinrishici.com](https://www.jinrishici.com)

该包是引入官方 SDK，通过esm、Typescript开发（支持类型推断）
支持esm、commonjs模块直接引入

每次调用返回一句诗词，根据时间、地点、天气、事件智能推荐

npm(yarn、pnpm) 安装后，引入本模块，调用 load 方法。

```javascript esm
import { load } from 'jinrishici-ts'
async function loadPoetry() {
	const result = await load()
	console.log(result);
}
```
仅支持浏览器环境中调用，不支持 Node 环境，不支持服务器渲染，请打包时注意。
React.js、Vue.js的服务端渲染需要判断是否浏览器环境
