"use strict";
var $ = require("jquery"),
    Vue = require("Vue"),
    router = require('./router.js');

var app = new Vue({
    router: router
}).$mount('#view');
