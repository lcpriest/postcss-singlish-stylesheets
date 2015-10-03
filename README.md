# PostCSS Singlish Stylesheets [![Build Status][ci-img]][ci]

[PostCSS] plugin for writing Singlish Stylesheets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dp-lewis/postcss-australian-stylesheets.svg
[ci]:      https://travis-ci.org/dp-lewis/postcss-australian-stylesheets

## Singlish syntax
```css
.foo {
    border-color: water-wally;
    background-color: durian;
    box-sizing: mah;
    color: kopi !pai-seh;
    display: cannot-lah;
    transition: all 1s kallang-wave;
    visibility: fly-kite;
}
```

## CSS output
```css
.foo {
    border-color: #47C5F1;
    background-color: #FAC011;
    box-sizing: border-box;
    color: #91754D !important;
    display: none;
    transition: all 1s cubic-bezier(0, 1, 0, 1);
    visibility: hidden;
}
```

## Usage

```js
postcss([ require('postcss-singlish-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.


## Thanks to

Most of the code is from [Australian Stylesheets](https://github.com/dp-lewis/postcss-australian-stylesheets.git) by David Lewis
