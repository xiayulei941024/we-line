import "@/styles/element-variables.scss"; // 自定义element样式
import ElementPlus from "element-plus";
import { Location } from "@element-plus/icons";

class UseElement {
  static install: (e: import("vue").App<any>) => void;
}
UseElement.install = function (app) {
  app.use(ElementPlus); // 注册element-plus
  // 图标注册
  app.component("location", Location); // 定位图标
};
export default UseElement;
