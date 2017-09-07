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
/*!*********************************!*\
  !*** ./Scripts/modules/main.js ***!
  \*********************************/
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
/*!***********************************!*\
  !*** ./Scripts/modules/router.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	//模块路由文件
	"use strict";
	var Vue = __webpack_require__(/*! Vue */ 2),
	    VueRouter = __webpack_require__(/*! VueRouter */ 4),
	    base = __webpack_require__(/*! ./base/main */ 9),
	    page1 = __webpack_require__(/*! ./page1/main */ 5),
	    page2 = __webpack_require__(/*! ./page2/main */ 7);
	
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

/***/ }),
/* 4 */
/*!****************************!*\
  !*** external "VueRouter" ***!
  \****************************/
/***/ (function(module, exports) {

	module.exports = VueRouter;

/***/ }),
/* 5 */
/*!***************************************!*\
  !*** ./Scripts/modules/page1/main.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./page1.html */ 6);
	
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
/* 6 */
/*!******************************************!*\
  !*** ./Scripts/modules/page1/page1.html ***!
  \******************************************/
/***/ (function(module, exports) {

	module.exports = "<p>pag1 content</p>";

/***/ }),
/* 7 */
/*!***************************************!*\
  !*** ./Scripts/modules/page2/main.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./page2.html */ 8);
	
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
/* 8 */
/*!******************************************!*\
  !*** ./Scripts/modules/page2/page2.html ***!
  \******************************************/
/***/ (function(module, exports) {

	module.exports = "<p>pag2 content</p> ";

/***/ }),
/* 9 */
/*!**************************************!*\
  !*** ./Scripts/modules/base/main.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./base.html */ 10);
	
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
/* 10 */
/*!****************************************!*\
  !*** ./Scripts/modules/base/base.html ***!
  \****************************************/
/***/ (function(module, exports) {

	module.exports = "<div id=\"root\"> <router-link to=\"/page1\" tag=\"li\" active-class=\"current\" class=\"sub-nav-li4\"> pag1 </router-link> <router-link to=\"/page2\" tag=\"li\" active-class=\"current\" class=\"sub-nav-li4\"> pag2 </router-link> <router-view></router-view> </div>";

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map