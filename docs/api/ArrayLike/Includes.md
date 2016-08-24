# `includes(item)`

Indicate if the Enumerable contains the given element.
This is the equivalent of [Array.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

#### Arguments

- item (*any*): element to search for

#### Returns

(*boolean*): indicate if the Enumerable contains the given element.

#### Example

```js
const data = [
  { foo: 'bar' },
  { x: 'y' },
  { a: 'b' },
];

Enumerable
        .from(data)
        .includes({ foo: 'bar' })
        .toArray();
// true
```
