//模块路由文件
"use strict";
var Vue = require("Vue"),
    VueRouter = require("VueRouter"),
    base = require("./base/main"),
    page1 = require("./page1/main"),
    page2 = require("./page2/main"),
    page3Base = require("./page3/base/main"),
    page3_1 = require("./page3/page3_1/main"),
    page3_2 = require("./page3/page3_2/main");


Vue.use(VueRouter);

//vue路由模块
var Router = new VueRouter({
    routes: [
        {
            path: "/",
            component: base,
            children: [
                {
                    name: "page1",
                    path: "/page1",
                    component: page1
                },
                {
                    name: "page2",
                    path: "/page2",
                    component: page2
                },
                {
                    path: "/page3",
                    component: page3Base,
                    children:[
                        {
                            name: "page3_1",
                            path: "/page3_1",
                            component: page3_1
                        },
                        {
                            name: "page3_2",
                            path: "/page3_2",
                            component: page3_2
                        },
                        {
                            path: "/*",
                            component: page3_1,
                            redirect: "/page3_1"
                        }
                    ]
                },
                {
                    path: "*",
                    component: page1,
                    redirect: "/page1"
                }
            ]
        }
    ]
});

module.exports = Router;