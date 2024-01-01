<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# From Words

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a [double-precision floating-point number][ieee754] from a higher order word and a lower order word.



<section class="usage">

## Usage

To use in Observable,

```javascript
fromWords = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var fromWords = require( 'path/to/vendor/umd/number-float64-base-from-words/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.fromWords;
})();
</script>
```

#### fromWords( high, low )

Creates a [double-precision floating-point number][ieee754] from a higher order word (unsigned 32-bit `integer`) and a lower order word (unsigned 32-bit `integer`).

```javascript
var v = fromWords( 1774486211, 2479577218 );
// returns 3.14e201

v = fromWords( 3221823995, 1413754136 );
// returns -3.141592653589793

v = fromWords( 0, 0 );
// returns 0.0

v = fromWords( 2147483648, 0 );
// returns -0.0

v = fromWords( 2146959360, 0 );
// returns NaN

v = fromWords( 2146435072, 0 );
// returns Infinity

v = fromWords( 4293918720, 0 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For more information regarding higher and lower order words, see [to-words][@stdlib/number/float64/base/to-words].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var high;
var low;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    high = round( randu()*MAX_UINT32 );
    low = round( randu()*MAX_UINT32 );
    x = fromWords( high, low );
    console.log( 'higher: %d. lower: %d. float: %d.', high, low, x );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number-float32/base/from-word`][@stdlib/number/float32/base/from-word]</span><span class="delimiter">: </span><span class="description">create a single-precision floating-point number from an unsigned integer corresponding to an IEEE 754 binary representation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-from-words.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-from-words

[test-image]: https://github.com/stdlib-js/number-float64-base-from-words/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float64-base-from-words/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-from-words/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-from-words?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-from-words.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-from-words/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-from-words/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float64-base-from-words/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float64-base-from-words/tree/esm
[branches-url]: https://github.com/stdlib-js/number-float64-base-from-words/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-from-words/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[@stdlib/number/float64/base/to-words]: https://github.com/stdlib-js/number-float64-base-to-words/tree/umd

<!-- <related-links> -->

[@stdlib/number/float32/base/from-word]: https://github.com/stdlib-js/number-float32-base-from-word/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
