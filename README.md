一：安装的插件
npm install webpack webpack-cli --save-dev
npm install react react-dom

  <!-- //配置项目react支持jsx -->

npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/preset-react --save-dev

  <!-- //配置typescript -->

npm install @babel/preset-typescript --save-dev

  <!-- //tsx文件会查找package.json中的type字段，所以需要重新引入react和react-dom -->

npm install @types/react @types/react-dom --save-dev

  <!-- webpack配置sass -->

npm install sass-loader sass --save-dev

  <!-- sass编译后的css文件路径不是我们想要的，所以需要resolve-url-loader处理一下路径 -->

npm install resolve-url-loader --save-dev

  <!-- 处理生成的css用postcss-loader -->

npm install postcss-loader postcss --save-dev

  <!-- 配置使用postcss-loader会用到另外两个插件 -->

npm install cssnano autoprefixer@latest --save-dev

  <!-- 解析一下css文件中的@import/require语句 -->

npm install css-loader --save-dev

  <!-- 独立为每个js打包独立的css文件 -->

npm install mini-css-extract-plugin --save-dev

  <!-- 配置html文件使用插件html-webpack-plugin -->

npm install html-webpack-plugin --save-dev

  <!-- webpack工程化用到的插件execa(用于开启一个node子进程)、inquirer（提供一些api和node中的命令行的交互）、chalk(w为我们的打印带上丰富的颜色) -->

npm install chalk inquirer execa --save-dev

  <!-- 和用户交互 -->

npm install inquirer --save-dev

  <!-- 代码风格优化 -->

npm install --dev --exact prettier

  <!-- 代码检查 -->

npm install eslint --save-dev

  <!-- 当prettier和eslint共同工作时，他们可能会冲突。我们需要安装eslint-config-prettie插件并且覆盖eslint部分规则。 -->

npm install eslint-config-prettier --save-dev

二：文件目录含义
containers 文件夹中存放不同项目的业务逻辑
packages 文件夹中存放不同项目的入口文件

三：启动项目：
本地开发：npm run dev
如果选择 all 进行开发，则使用 localhost:9000/`${自定义页面文件名}`.html 访问，如：启动项目 all，home 访问：localhost:9000/home.html、editor 访问：localhost:9000/editor.html
