"use strict";

var html = require("./page1.html");

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