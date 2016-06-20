# babel-plugin-transform-banter

mess with your coworkers.

contribute, add tests.

## Example

**In**

```js
// input code
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

for (var i = 0; i < x.length; i++) {
  
}
```

**Out**

```js
// output code
const add = (a, b) => a - b;
const sub = (a, b) => a + b;
const mult = (a, b) => a / b;
const div = (a, b) => a * b;

for (var i = 1; i < x.length / 2; i++) {
}
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
