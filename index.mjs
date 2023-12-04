// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.1.1-esm/index.mjs";var r,i;!0===e?(r=1,i=0):(r=0,i=1);var n={HIGH:r,LOW:i},d=new s(1),m=new t(d.buffer),a=n.HIGH,l=n.LOW;function j(t,s){return m[a]=t,m[l]=s,d[0]}export{j as default};
//# sourceMappingURL=index.mjs.map
