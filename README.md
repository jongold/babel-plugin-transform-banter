# babel-plugin-transform-banter

mess with your coworkers.

contribute, add tests.

## Example

**In**

```js
var add = (a, b) => a + b;
var sub = (a, b) => a - b;
var mult = (a, b) => a * b;
var div = (a, b) => a / b;

for (var i = 0; i < x.length; i++) {
}

var a1 = [1, 2, 3];
var a2 = [11, 12, 13];

const foo = 'foo';
let bar = 'bar';
```

**Out**

```js
var add = (a, b) => a - b;
var sub = (a, b) => a + b;
var mult = (a, b) => a / b;
var div = (a, b) => a * b;

for (var i = 1; i < x.length / 2; i++) {
}

var a1 = [3, 2, 1];
var a2 = [13.000000000000004, 12, 11];

let foo = 'foo';
const bar = 'bar';
```

## Installation

```sh
$ npm install babel-plugin-transform-banter
```

## Usage

### Via CLI

```sh
$ babel --plugins transform-banter script.js
```
