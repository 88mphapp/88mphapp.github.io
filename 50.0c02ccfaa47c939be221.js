(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{BGq9:function(e,r,n){"use strict";n.r(r);var t=n("zfVJ");function i(e,r,n,t,i,o,a){try{var c=e[o](a),s=c.value}catch(u){return void n(u)}c.done?r(s):Promise.resolve(s).then(t,i)}r.default=function(e){var r,n,o,a=e.preferred,c=e.svg,s=window.ethereum||window.web3&&window.web3.currentProvider;return{name:e.label||(null===(r=Object.keys(s).find(function(e){return e.startsWith("is")&&!e.includes("MetaMask")}))||void 0===r?void 0:r.split("is")[1])||"Detected Wallet",svg:c||'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.89 6 10 6.9 10 8V16C10 17.1 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" fill="black"/>\n</svg>',wallet:(n=regeneratorRuntime.mark(function e(r){var n,t,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.getProviderName,t=r.createModernProviderInterface,i=r.createLegacyProviderInterface,e.abrupt("return",{provider:s,interface:s&&void 0===n(s)?"function"==typeof s.enable?t(s):i(s):null});case 2:case"end":return e.stop()}},e)}),o=function(){var e=this,r=arguments;return new Promise(function(t,o){var a=n.apply(e,r);function c(e){i(a,t,o,c,s,"next",e)}function s(e){i(a,t,o,c,s,"throw",e)}c(void 0)})},function(e){return o.apply(this,arguments)}),type:"injected",installMessage:t.a,desktop:!0,mobile:!0,preferred:a}}}}]);