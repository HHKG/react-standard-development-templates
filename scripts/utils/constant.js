//这个文件主要存放我们关于调用脚本声明的一些常量

// 规定固定的入口文件名packages/**/index.tsx
const MAIN_FILE = "index.tsx";
const chalk = require("chalk");

// 打印颜色
const error = chalk.bold.red;
const warning = chalk.hex("#FFA500");
const success = chalk.green;

const maps = {
  error,
  warning,
  success,
};
/**
 * 因为环境变量的注入是通过字符串进行注入的
 * 所以，当打包多个文件时，我们通过*进行链接 比如home和editor 注入的环境变量为home*editor
 */
// 注入多个包环境变量时的分隔符
const separator = "*";
const log = (message, types) => {
  console.log(maps[types](message));
};
// 固定端口
const BASE_PORT = 9000;
module.exports = {
  MAIN_FILE,
  log,
  separator,
  BASE_PORT,
};
