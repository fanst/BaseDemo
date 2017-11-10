/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************!*\
  !*** ./app/modules/index/main.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var $ = __webpack_require__(/*! jquery */ 1),
	    Vue = __webpack_require__(/*! Vue */ 2),
	    router = __webpack_require__(/*! ./router.js */ 3);
	
	var app = new Vue({
	    router: router
	}).$mount('#view');


/***/ }),
/* 1 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ }),
/* 2 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ (function(module, exports) {

	module.exports = Vue;

/***/ }),
/* 3 */
/*!*************************************!*\
  !*** ./app/modules/index/router.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	//模块路由文件
	"use strict";
	var Vue = __webpack_require__(/*! Vue */ 2),
	    VueRouter = __webpack_require__(/*! VueRouter */ 4),
	    base = __webpack_require__(/*! ./base/main */ 5),
	    page1 = __webpack_require__(/*! ./page1/main */ 7),
	    page2 = __webpack_require__(/*! ./page2/main */ 9),
	    page3Base = __webpack_require__(/*! ./page3/base/main */ 11),
	    page3_1 = __webpack_require__(/*! ./page3/page3_1/main */ 13),
	    page3_2 = __webpack_require__(/*! ./page3/page3_2/main */ 15);
	
	
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

/***/ }),
/* 4 */
/*!****************************!*\
  !*** external "VueRouter" ***!
  \****************************/
/***/ (function(module, exports) {

	module.exports = VueRouter;

/***/ }),
/* 5 */
/*!****************************************!*\
  !*** ./app/modules/index/base/main.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./base.html */ 6);
	
	var base = {
	    template: html,
	    data: function () {
	        return {
	            isShowHeader: true,
	            isShowBindPhoneMsg: false
	        };
	    },
	    created: function () {
	
	    },
	    methods: {
	        //自定义方法
	        init: function () {
	
	        },
	        render: function () {
	
	        }
	    }
	};
	module.exports = base;

/***/ }),
/* 6 */
/*!******************************************!*\
  !*** ./app/modules/index/base/base.html ***!
  \******************************************/
/***/ (function(module, exports) {

	module.exports = "<div id=\"root\" style=\"height:100%\"> <div style=\"background-color:#eee;height:100%\"> <div class=\"top_bar\"> <router-link to=\"/page1\" tag=\"div\" active-class=\"current\" class=\"page_part\"> pag1 </router-link> <router-link to=\"/page2\" tag=\"div\" active-class=\"current\" class=\"page_part\"> pag2 </router-link> <router-link to=\"/page3\" tag=\"div\" active-class=\"current\" class=\"page_part\"> pag3 </router-link> </div> <router-view></router-view> </div> </div>";

/***/ }),
/* 7 */
/*!*****************************************!*\
  !*** ./app/modules/index/page1/main.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./page1.html */ 8);
	
	var page1 = {
	    template: html,
	    data: function () {
	        return {
	            isShowHeader: true,
	            isShowBindPhoneMsg: false
	        };
	    },
	    created: function () {
	
	    },
	    methods: {
	        //自定义方法
	        init: function () {
	
	        },
	        render: function () {
	
	        }
	    }
	};
	module.exports = page1;

/***/ }),
/* 8 */
/*!********************************************!*\
  !*** ./app/modules/index/page1/page1.html ***!
  \********************************************/
/***/ (function(module, exports) {

	module.exports = "<div id=\"page1List\"> <div class=\"container\"> <div class=\"list-con\">pag1 content</div> <div class=\"list-con\">pag1 content</div> <div class=\"list-con\">pag1 content</div> <div class=\"list-con\">pag1 content</div> </div> </div> ";

/***/ }),
/* 9 */
/*!*****************************************!*\
  !*** ./app/modules/index/page2/main.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./page2.html */ 10);
	
	var page2 = {
	    template: html,
	    data: function () {
	        return {
	            isShowHeader: true,
	            isShowBindPhoneMsg: false
	        };
	    },
	    created: function () {
	
	    },
	    methods: {
	        //自定义方法
	        init: function () {
	
	        },
	        render: function () {
	
	        }
	    }
	};
	module.exports = page2;

/***/ }),
/* 10 */
/*!********************************************!*\
  !*** ./app/modules/index/page2/page2.html ***!
  \********************************************/
/***/ (function(module, exports) {

	module.exports = "<p>pag2 content</p> ";

/***/ }),
/* 11 */
/*!**********************************************!*\
  !*** ./app/modules/index/page3/base/main.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./base.html */ 12);
	
	var base = {
	    template: html,
	    data: function () {
	        return {
	            isShowHeader: true,
	            isShowBindPhoneMsg: false
	        };
	    },
	    created: function () {
	
	    },
	    methods: {
	        //自定义方法
	        init: function () {
	
	        },
	        render: function () {
	
	        }
	    }
	};
	module.exports = base;

/***/ }),
/* 12 */
/*!************************************************!*\
  !*** ./app/modules/index/page3/base/base.html ***!
  \************************************************/
/***/ (function(module, exports) {

	module.exports = "<div> <router-link to=\"/page3_1\" tag=\"li\" active-class=\"current\" class=\"sub-nav-li4\"> pag3_1 </router-link> <router-link to=\"/page3_2\" tag=\"li\" active-class=\"current\" class=\"sub-nav-li4\"> pag3_2 </router-link> <router-view></router-view> </div> ";

/***/ }),
/* 13 */
/*!*************************************************!*\
  !*** ./app/modules/index/page3/page3_1/main.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./page3_1.html */ 14);
	
	var page3_1 = {
	    template: html,
	    data: function () {
	        return {
	            isShowHeader: true,
	            isShowBindPhoneMsg: false
	        };
	    },
	    created: function () {
	
	    },
	    methods: {
	        //自定义方法
	        init: function () {
	
	        },
	        render: function () {
	
	        }
	    }
	};
	module.exports = page3_1;

/***/ }),
/* 14 */
/*!******************************************************!*\
  !*** ./app/modules/index/page3/page3_1/page3_1.html ***!
  \******************************************************/
/***/ (function(module, exports) {

	module.exports = "<p>pag3_1 content</p> ";

/***/ }),
/* 15 */
/*!*************************************************!*\
  !*** ./app/modules/index/page3/page3_2/main.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./page3_2.html */ 16);
	
	var page3_2 = {
	    template: html,
	    data: function () {
	        return {
	            isShowHeader: true,
	            isShowBindPhoneMsg: false
	        };
	    },
	    created: function () {
	
	    },
	    methods: {
	        //自定义方法
	        init: function () {
	
	        },
	        render: function () {
	
	        }
	    }
	};
	module.exports = page3_2;

/***/ }),
/* 16 */
/*!******************************************************!*\
  !*** ./app/modules/index/page3/page3_2/page3_2.html ***!
  \******************************************************/
/***/ (function(module, exports) {

	module.exports = "<p>pag3_2 content</p> ";

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map