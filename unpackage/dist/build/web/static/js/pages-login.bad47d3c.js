(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login"],{"13d8":function(t,n,e){"use strict";e.r(n);var r=e("9c74"),o=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=o.a},"3b14":function(t,n,e){"use strict";e.r(n);var r=e("ccdc"),o=e("13d8");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("c768");var a=e("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"7ad96926",null,!1,r["a"],void 0);n["default"]=c.exports},"531e":function(t,n,e){var r=e("ebfa");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=e("4f06").default;o("ef4b1810",r,!0,{sourceMap:!1,shadowMode:!1})},"9c74":function(t,n,e){"use strict";e("7a82");var r=e("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e("f07e")),i=r(e("c964"));e("99af");var a=e("7b58"),c={data:function(){return{codeUrl:"",captchaEnabled:!0,register:!1,globalConfig:getApp().globalData.config,loginForm:{username:"admin",password:"admin123",code:"",uuid:""}}},created:function(){this.getCode()},methods:{handleUserRegister:function(){this.$tab.redirectTo("/pages/register")},handlePrivacy:function(){var t=this.globalConfig.appInfo.agreements[0];this.$tab.navigateTo("/pages/common/webview/index?title=".concat(t.title,"&url=").concat(t.url))},handleUserAgrement:function(){var t=this.globalConfig.appInfo.agreements[1];this.$tab.navigateTo("/pages/common/webview/index?title=".concat(t.title,"&url=").concat(t.url))},getCode:function(){var t=this;(0,a.getCodeImg)().then((function(n){t.captchaEnabled=void 0===n.captchaEnabled||n.captchaEnabled,t.captchaEnabled&&(t.codeUrl="data:image/gif;base64,"+n.img,t.loginForm.uuid=n.uuid)}))},handleLogin:function(){var t=this;return(0,i.default)((0,o.default)().mark((function n(){return(0,o.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:""===t.loginForm.username?t.$modal.msgError("请输入您的账号"):""===t.loginForm.password?t.$modal.msgError("请输入您的密码"):""===t.loginForm.code&&t.captchaEnabled?t.$modal.msgError("请输入验证码"):(t.$modal.loading("登录中，请耐心等待..."),t.pwdLogin());case 1:case"end":return n.stop()}}),n)})))()},pwdLogin:function(){var t=this;return(0,i.default)((0,o.default)().mark((function n(){return(0,o.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$store.dispatch("Login",t.loginForm).then((function(){t.$modal.closeLoading(),t.loginSuccess()})).catch((function(){t.captchaEnabled&&t.getCode()}));case 1:case"end":return n.stop()}}),n)})))()},loginSuccess:function(t){var n=this;this.$store.dispatch("GetInfo").then((function(t){n.$tab.reLaunch("/pages/index")}))}}};n.default=c},c768:function(t,n,e){"use strict";var r=e("531e"),o=e.n(r);o.a},c964:function(t,n,e){"use strict";function r(t,n,e,r,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void e(u)}c.done?n(l):Promise.resolve(l).then(r,o)}e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var a=t.apply(n,e);function c(t){r(a,o,i,c,l,"next",t)}function l(t){r(a,o,i,c,l,"throw",t)}c(void 0)}))}},e("d3b7")},ccdc:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"normal-login-container"},[e("v-uni-view",{staticClass:"logo-content align-center justify-center flex"},[e("v-uni-image",{staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:t.globalConfig.appInfo.logo,mode:"widthFix"}}),e("v-uni-text",{staticClass:"title"},[t._v("若依移动端登录")])],1),e("v-uni-view",{staticClass:"login-form-content"},[e("v-uni-view",{staticClass:"input-item flex align-center"},[e("v-uni-view",{staticClass:"iconfont icon-user icon"}),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入账号",maxlength:"30"},model:{value:t.loginForm.username,callback:function(n){t.$set(t.loginForm,"username",n)},expression:"loginForm.username"}})],1),e("v-uni-view",{staticClass:"input-item flex align-center"},[e("v-uni-view",{staticClass:"iconfont icon-password icon"}),e("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",maxlength:"20"},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}})],1),t.captchaEnabled?e("v-uni-view",{staticClass:"input-item flex align-center",staticStyle:{width:"60%",margin:"0px"}},[e("v-uni-view",{staticClass:"iconfont icon-code icon"}),e("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"请输入验证码",maxlength:"4"},model:{value:t.loginForm.code,callback:function(n){t.$set(t.loginForm,"code",n)},expression:"loginForm.code"}}),e("v-uni-view",{staticClass:"login-code"},[e("v-uni-image",{staticClass:"login-code-img",attrs:{src:t.codeUrl},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getCode.apply(void 0,arguments)}}})],1)],1):t._e(),e("v-uni-view",{staticClass:"action-btn"},[e("v-uni-button",{staticClass:"login-btn cu-btn block bg-blue lg round",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleLogin.apply(void 0,arguments)}}},[t._v("登录")])],1),t.register?e("v-uni-view",{staticClass:"reg text-center"},[e("v-uni-text",{staticClass:"text-grey1"},[t._v("没有账号？")]),e("v-uni-text",{staticClass:"text-blue",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleUserRegister.apply(void 0,arguments)}}},[t._v("立即注册")])],1):t._e(),e("v-uni-view",{staticClass:"xieyi text-center"},[e("v-uni-text",{staticClass:"text-grey1"},[t._v("登录即代表同意")]),e("v-uni-text",{staticClass:"text-blue",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleUserAgrement.apply(void 0,arguments)}}},[t._v("《用户协议》")]),e("v-uni-text",{staticClass:"text-blue",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handlePrivacy.apply(void 0,arguments)}}},[t._v("《隐私协议》")])],1)],1)],1)},o=[]},ebfa:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-7ad96926]{background-color:#fff}body.?%PAGE?%[data-v-7ad96926]{background-color:#fff}.normal-login-container[data-v-7ad96926]{width:100%}.normal-login-container .logo-content[data-v-7ad96926]{width:100%;font-size:21px;text-align:center;padding-top:15%}.normal-login-container .logo-content uni-image[data-v-7ad96926]{border-radius:4px}.normal-login-container .logo-content .title[data-v-7ad96926]{margin-left:10px}.normal-login-container .login-form-content[data-v-7ad96926]{text-align:center;margin:20px auto;margin-top:15%;width:80%}.normal-login-container .login-form-content .input-item[data-v-7ad96926]{margin:20px auto;background-color:#f5f6f7;height:45px;border-radius:20px}.normal-login-container .login-form-content .input-item .icon[data-v-7ad96926]{font-size:%?38?%;margin-left:10px;color:#999}.normal-login-container .login-form-content .input-item .input[data-v-7ad96926]{width:100%;font-size:14px;line-height:20px;text-align:left;padding-left:15px}.normal-login-container .login-form-content .login-btn[data-v-7ad96926]{margin-top:40px;height:45px}.normal-login-container .login-form-content .reg[data-v-7ad96926]{margin-top:15px}.normal-login-container .login-form-content .xieyi[data-v-7ad96926]{color:#333;margin-top:20px}.normal-login-container .login-form-content .login-code[data-v-7ad96926]{height:38px;float:right}.normal-login-container .login-form-content .login-code .login-code-img[data-v-7ad96926]{height:38px;position:absolute;margin-left:10px;width:%?200?%}',""]),t.exports=n},f07e:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
n.default=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(j){s=function(t,n,e){return t[n]=e}}function d(t,n,e,r){var o=n&&n.prototype instanceof p?n:p,a=Object.create(o.prototype),c=new F(r||[]);return i(a,"_invoke",{value:_(t,e,c)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(j){return{type:"throw",arg:j}}}t.wrap=d;var h={};function p(){}function g(){}function v(){}var m={};s(m,c,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(O([])));w&&w!==e&&o.call(w,c)&&(m=w);var b=v.prototype=p.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function E(t,n){var e;i(this,"_invoke",{value:function(i,a){function c(){return new n((function(e,c){(function e(i,a,c,l){var u=f(t[i],t,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==(0,r.default)(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(t){e("next",t,c,l)}),(function(t){e("throw",t,c,l)})):n.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,l)}))}l(u.arg)})(i,a,e,c)}))}return e=e?e.then(c,c):c()}})}function _(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return $()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var l=f(t,n,e);if("normal"===l.type){if(r=e.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r="completed",e.method="throw",e.arg=l.arg)}}}function L(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator["return"]&&(n.method="return",n.arg=void 0,L(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function C(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function O(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(o.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:$}}function $(){return{value:void 0,done:!0}}return g.prototype=v,i(b,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:g,configurable:!0}),g.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(E.prototype),s(E.prototype,l,(function(){return this})),t.AsyncIterator=E,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new E(d(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),s(b,u,"Generator"),s(b,c,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=O,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t},e("7a82"),e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("b636"),e("944a"),e("0c47"),e("23dc"),e("3410"),e("d9e2"),e("d401"),e("14d9"),e("159b"),e("131a"),e("26e9"),e("fb6a");var r=function(t){return t&&t.__esModule?t:{default:t}}(e("0122"))}}]);