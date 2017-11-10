"use strict";

var html = require("./base.html");

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