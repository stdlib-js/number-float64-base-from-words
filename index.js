// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol.toStringTag:"",i=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,i,f,a,y;if(null==t)return r.call(t);i=t[e],y=e,n=null!=(a=t)&&o.call(a,y);try{t[e]=void 0}catch(n){return r.call(t)}return f=r.call(t),n?t[e]=i:delete t[e],f}:function(t){return r.call(t)},f="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var t,n,r;if("function"!=typeof a)return!1;try{n=new a(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(f&&r instanceof Uint32Array||"[object Uint32Array]"===i(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?y:function(){throw new Error("not implemented")};var u,c=t,l="function"==typeof Float64Array,p="function"==typeof Float64Array?Float64Array:null,A="function"==typeof Float64Array?Float64Array:void 0;u=function(){var t,n,r;if("function"!=typeof p)return!1;try{n=new p([1,3.14,-3.14,NaN]),r=n,t=(l&&r instanceof Float64Array||"[object Float64Array]"===i(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?A:function(){throw new Error("not implemented")};var d,U=u,m="function"==typeof Uint8Array,b="function"==typeof Uint8Array?Uint8Array:null,v="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var t,n,r;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,256,257]),r=n,t=(m&&r instanceof Uint8Array||"[object Uint8Array]"===i(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?v:function(){throw new Error("not implemented")};var w,s=d,h="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,g="function"==typeof Uint16Array?Uint16Array:void 0;w=function(){var t,n,r;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,65536,65537]),r=n,t=(h&&r instanceof Uint16Array||"[object Uint16Array]"===i(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?g:function(){throw new Error("not implemented")};var j,F,O,E={uint16:w,uint8:s};(j=new E.uint16(1))[0]=4660,!0==(52===new E.uint8(j.buffer)[0])?(F=1,O=0):(F=0,O=1);var H={HIGH:F,LOW:O},T=new U(1),W=new c(T.buffer),x=H.HIGH,G=H.LOW;return function(t,n){return W[x]=t,W[G]=n,T[0]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).fromWords=n();
//# sourceMappingURL=index.js.map
