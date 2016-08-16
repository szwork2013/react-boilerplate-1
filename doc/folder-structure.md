# 文件夹（目录）结构说明

```javascript
-
- app // 生产环境目录
  |- resources
  |     |- js
  |     |   |- vendor-hash.js
  |     |   |- common-hash.js
  |     |   |- ...
  |     |   \- projectName-hash.js
  |     |- css
  |     |   |- vendor-hash.css
  |     |   |- common-hash.css
  |     |   |- ...
  |     |   \- projectName-hash.css
  |     |- images
  |     |   |- sprite-hash.svg (optional, 1)
  |     |   |- sprite-hash.png (optional, 3)
  |     |   |- ...
  |     |   \- app-hash.png
  |     \- fonts (optional, 2)
  |         |- app-hash.ttf
  |         |- app-hash.woff
  |         |- apply-hash.eot
  |         \- app-hash.svg
  |- signup.html    // 注册页
  |- signin.html    // 登录页
  |- 404.html       // 未找到页
  |- front.html     // 登录前首页
  |- index.html     // 登录后首页（单页应用主体）
  \- favicon.ico
- src // 开发环境目录
  |- components // 展示组件目录
  |     |- Cosyless
  |     |- Icon
  |         |- js
  |         |- less
  |         \- (images|fonts)
  |     |- Button
  |     |- Layout
  |     |- ...
  |     \- Component
  |         |- js
  |         |- less
  |         \- images  
  |- containers // 容器组件目录
  |     |- ...
  |     \- Component
  |         \- js
  |- reducers // Redux（规则）定义目录
  |     |- ...
  |     \- index.js // 根 Reducer
  |- actions // Redux（触发器）定义目录
  |     |- ...
  |     \- index.js // 根 Action
  |- api // Redux Store 模拟数据接口目录
  |     |- moduleA
  |     |     \- data.json
  |     \- moduleB
  |           \- data.json
  |- index.ejs // HTML 文件模板
  |- index.js // 应用程序根（混合展示组件、容器组件、Store、API）
  \- favicon.ico
```
