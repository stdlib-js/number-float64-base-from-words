// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";var r,i;!0===e?(r=1,i=0):(r=0,i=1);var n=t,d={HIGH:r,LOW:i},a=new s(1),m=new n(a.buffer),l=d.HIGH,j=d.LOW;var o=function(t,s){return m[l]=t,m[j]=s,a[0]};export{o as default};
//# sourceMappingURL=index.mjs.map
