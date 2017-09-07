//模块路由文件
"use strict";
var Vue = require("Vue"),
    VueRouter = require("VueRouter"),
    base = require("./base/main"),
    page1 = require("./page1/main"),
    page2 = require("./page2/main");

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
                    path: "*",
                    component: page1,
                    redirect: "/page1"
                }
            ]
        }
    ]
});

module.exports = Router;