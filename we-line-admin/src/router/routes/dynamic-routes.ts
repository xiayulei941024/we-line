/* 固定的路由 */
/*
    meta:{
        name:侧边栏名字,
        icon:侧边栏图标,
        hide:是否在侧边栏隐藏
    }
*/
import { MyRoute } from "../interface/InterfaceRoute";

const dynamicRoutes: Array<MyRoute> = [
  {
    path: "/",
    component: (): Promise<typeof import("*.vue")> =>
      import("@/layout/Layout.vue"),
    name: "Layout",
    // redirect: 'home',
    meta: {
      // requiresAuth: true,
      name: "首页"
    },
    children: [
      {
        path: "home",
        component: (): Promise<typeof import("*.vue")> =>
          import("@/views/home/Home.vue"),
        name: "home",
        meta: {
          name: "首页",
          icon: "location"
        }
      },
      // {
      //   path: "router",
      //   component: (): Promise<typeof import("*.vue")> =>
      //     import("@/views/router/router.vue"),
      //   name: "router",
      //   meta: {
      //     name: "路由管理",
      //     icon: "el-icon-guide",
      //     hide: false
      //   }
      // },
      // {
      //   path: "color",
      //   component: (): Promise<typeof import("*.vue")> =>
      //     import("@/views/color/color.vue"),
      //   name: "color",
      //   meta: {
      //     name: "主题管理",
      //     icon: "el-icon-brush"
      //   }
      // },
      // {
      //   path: "language",
      //   component: (): Promise<typeof import("*.vue")> =>
      //     import("@/views/language/language.vue"),
      //   name: "language",
      //   meta: {
      //     name: "国际化",
      //     icon: "el-icon-s-flag"
      //   }
      // },
      {
        path: "icon",
        component: (): Promise<typeof import("*.vue")> =>
          import("@/views/icon/index.vue"),
        name: "icon",
        meta: {
          name: "图标管理",
          icon: "el-icon-picture-outline-round"
        },
        children: [
          {
            path: "elicon",
            component: (): Promise<typeof import("*.vue")> =>
              import("@/views/icon/el-icon.vue"),
            name: "elicon",
            meta: {
              name: "Element图标",
              icon: "el-icon-caret-bottom"
              // hide:true
            }
          },
          {
            path: "aliicon",
            component: (): Promise<typeof import("*.vue")> =>
              import("@/views/icon/ali-icon.vue"),
            name: "aliicon",
            meta: {
              name: "阿里图标",
              icon: "el-icon-caret-top"
            }
          }
        ]
      }
      // {
      //   path: "table",
      //   component: (): Promise<typeof import("*.vue")> =>
      //     import("@/views/table/index.vue"),
      //   name: "table",
      //   meta: {
      //     name: "表格管理",
      //     icon: "el-icon-s-grid"
      //   },
      //   children: [
      //     {
      //       path: "basics",
      //       component: (): Promise<typeof import("*.vue")> =>
      //         import("@/views/table/basics.vue"),
      //       name: "basics",
      //       meta: {
      //         name: "基础表格",
      //         icon: "el-icon-menu"
      //       }
      //     },
      //     {
      //       path: "complex",
      //       component: (): Promise<typeof import("*.vue")> =>
      //         import("@/views/table/complex.vue"),
      //       name: "complex",
      //       meta: {
      //         name: "复杂表格",
      //         icon: "el-icon-s-grid"
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: "chart",
      //   component: (): Promise<typeof import("*.vue")> =>
      //     import("@/views/chart/index.vue"),
      //   name: "chart",
      //   meta: {
      //     name: "图表示例",
      //     icon: "el-icon-s-data"
      //   },
      //   children: [
      //     {
      //       path: "column",
      //       component: (): Promise<typeof import("*.vue")> =>
      //         import("@/views/chart/column.vue"),
      //       name: "column",
      //       meta: {
      //         name: "柱形图表",
      //         icon: "el-icon-s-data"
      //       }
      //     },
      //     {
      //       path: "line",
      //       component: (): Promise<typeof import("*.vue")> =>
      //         import("@/views/chart/line.vue"),
      //       name: "line",
      //       meta: {
      //         name: "折线图表",
      //         icon: "el-icon-minus"
      //       }
      //     },
      //     {
      //       path: "more",
      //       component: (): Promise<typeof import("*.vue")> =>
      //         import("@/views/chart/more.vue"),
      //       name: "more",
      //       meta: {
      //         name: "其他图表",
      //         icon: "el-icon-s-operation"
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: "text",
      //   component: (): Promise<typeof import("*.vue")> =>
      //     import("@/views/text/text.vue"),
      //   name: "text",
      //   meta: {
      //     name: "富文本编辑器",
      //     icon: "el-icon-document"
      //   }
      // },
      // {
      //   path: "uploading",
      //   component: (): Promise<typeof import("*.vue")> =>
      //     import("@/views/uploading/uploading.vue"),
      //   name: "uploading",
      //   meta: {
      //     name: "自定义图片上传",
      //     icon: "el-icon-upload"
      //   }
      // },
      // {
      //   path: "map",
      //   component: (): Promise<typeof import("*.vue")> =>
      //     import("@/views/map/index.vue"),
      //   name: "map",
      //   meta: {
      //     name: "地图",
      //     icon: "el-icon-map-location"
      //   },
      //   children: [
      //     {
      //       path: "baidu",
      //       component: (): Promise<typeof import("*.vue")> =>
      //         import("@/views/map/baidu.vue"),
      //       name: "baidu",
      //       meta: {
      //         name: "百度地图",
      //         icon: "el-icon-guide"
      //       }
      //     },
      //     {
      //       path: "autoNavi",
      //       component: (): Promise<typeof import("*.vue")> =>
      //         import("@/views/map/autoNavi.vue"),
      //       name: "autoNavi",
      //       meta: {
      //         name: "高德地图",
      //         icon: "el-icon-position"
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: "contact",
      //   component: (): Promise<typeof import("*.vue")> =>
      //     import("@/views/contact/contact.vue"),
      //   name: "contact",
      //   meta: {
      //     name: "联系我们",
      //     icon: "el-icon-phone"
      //   }
      // },
      // {
      //   path: "else",
      //   component: (): Promise<typeof import("*.vue")> =>
      //     import("@/views/else/index.vue"),
      //   name: "else",
      //   meta: {
      //     name: "其他组件",
      //     icon: "el-icon-question"
      //   },
      //   children: [
      //     {
      //       path: "convas",
      //       component: (): Promise<typeof import("*.vue")> =>
      //         import("@/views/else/canvas.vue"),
      //       name: "convas",
      //       meta: {
      //         name: "页面生成图片",
      //         icon: "el-icon-picture-outline"
      //       }
      //     },
      //     {
      //       path: "code",
      //       component: (): Promise<typeof import("*.vue")> =>
      //         import("@/views/else/code.vue"),
      //       name: "code",
      //       meta: {
      //         name: "动态二维码",
      //         icon: "el-icon-full-screen"
      //       }
      //     }
      //   ]
      // }
    ]
  }
];
export default dynamicRoutes;
