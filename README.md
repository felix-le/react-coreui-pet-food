# Plug in

## Table of contents

- [classnames](#classname)

## [classnames](https://www.npmjs.com/package/classnames)

```bash
yarn add classnames
```

### How to use?

```bash
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

## reactstrap

## chart.js

[-----]

# Not understand yet

- core-js (code more abruptly)
- chart.js (for creating chart)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)

```
As of 2.x we have made chart.js a peer dependency for greater flexibility. Please add chart.js as a dependency on your project to use 2.x. Currently, 2.5.x is the recommended version of chart.js to use.
```

- flag-icon-css (A collection of all country flags in SVG — plus the CSS for easier integration)
- font-awesome
- node-sass
- [react-app-polyfill ](https://www.npmjs.com/package/react-app-polyfill)

```bash
These modules ensure the following language features are present:

Promise (for async / await support)
window.fetch (a Promise-based way to make web requests in the browser)
Object.assign (a helper required for Object Spread, i.e. { ...a, ...b })
Symbol (a built-in object used by for...of syntax and friends)
Array.from (a built-in static method used by array spread, i.e. [...arr])
```

- [simple-line-icons](https://simplelineicons.github.io/) - [introduce](https://www.npmjs.com/package/simple-line-icons)

# [Enzyme for test ](https://enzymejs.github.io/enzyme/)

install these plugin
"enzyme": "^3.10.0",
"enzyme-adapter-react-16": "^1.14.0",

- [polyfill](for help render normal on IE9)
