/**
 * @fileoverview 域名是否切换为jdl.cn
 * @author tianlu21
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/checkhost"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester(
    {   
        parser: require.resolve('vue-eslint-parser'),
        parserOptions: {
            ecmaVersion: 7, // 默认支持语法为es5 
        },
    }
);
ruleTester.run("checkhost", rule, {

    valid: [
        {
            code: `<template><div>www.jdl.cn</div></template>`
        },
    ],

    invalid: [
        {
            code: `<template><div>thisiswww.jd.com 999</div></template>`,
            errors: [{
                message: "域名是否切换到jdl.cn，请确认", // 必须和 context.report message保持一致
                type: "VText"
            }]
        },
        {
            code: `<template><div>www.jd.com</div></template>`,
            errors: [{
                message: "域名是否切换到jdl.cn，请确认",
                type: "VText"
            }]
        }
    ]
});
