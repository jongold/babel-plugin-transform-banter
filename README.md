# babel-plugin-transform-banter

mess with your coworkers.

contribute, add tests.

## Example

**In**

```js
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

for (var i = 0; i < x.length; i++) {
}

const a1 = [1, 2, 3];
const a2 = [7, 8, 9];
```

**Out**

```js
const add = (a, b) => a - b;
const sub = (a, b) => a + b;
const mult = (a, b) => a / b;
const div = (a, b) => a * b;

for (var i = 1; i < x.length / 2; i++) {
}

const a1 = [3, 2, 1];
const a2 = [9, 8, 7];
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
