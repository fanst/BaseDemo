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
/*!****************************************!*\
  !*** ./app/modules/pagedetail/main.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var $ = __webpack_require__(/*! jquery */ 1),
	    Vue = __webpack_require__(/*! Vue */ 2),
	    router = __webpack_require__(/*! ./router.js */ 17);
	
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
/* 3 */,
/* 4 */
/*!****************************!*\
  !*** external "VueRouter" ***!
  \****************************/
/***/ (function(module, exports) {

	module.exports = VueRouter;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!******************************************!*\
  !*** ./app/modules/pagedetail/router.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	//模块路由文件
	"use strict";
	var Vue = __webpack_require__(/*! Vue */ 2),
	    VueRouter = __webpack_require__(/*! VueRouter */ 4),
	    base = __webpack_require__(/*! ./base/main */ 18),
	    page1 = __webpack_require__(/*! ./page1/main */ 20),
	    page2 = __webpack_require__(/*! ./page2/main */ 22)
	
	
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
/* 18 */
/*!*********************************************!*\
  !*** ./app/modules/pagedetail/base/main.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./base.html */ 19);
	
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
/* 19 */
/*!***********************************************!*\
  !*** ./app/modules/pagedetail/base/base.html ***!
  \***********************************************/
/***/ (function(module, exports) {

	module.exports = "<div style=\"height:100%;background-color:#eee\"> <router-view></router-view> </div>";

/***/ }),
/* 20 */
/*!**********************************************!*\
  !*** ./app/modules/pagedetail/page1/main.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./page1.html */ 21);
	
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
/* 21 */
/*!*************************************************!*\
  !*** ./app/modules/pagedetail/page1/page1.html ***!
  \*************************************************/
/***/ (function(module, exports) {

	module.exports = "<div class=\"show_box\"> <router-link to=\"/page2\" tag=\"div\" class=\"head_img_box\"> </router-link> <div class=\"detaikl_info_box\"></div> </div> ";

/***/ }),
/* 22 */
/*!**********************************************!*\
  !*** ./app/modules/pagedetail/page2/main.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var html = __webpack_require__(/*! ./page2.html */ 23);
	
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
/* 23 */
/*!*************************************************!*\
  !*** ./app/modules/pagedetail/page2/page2.html ***!
  \*************************************************/
/***/ (function(module, exports) {

	module.exports = "<p>pag2 content</p> ";

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map