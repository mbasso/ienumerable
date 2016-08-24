# `toSet()`

Create a new [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) from an Enumerable.

#### Returns

(*Set*): New [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) created from an Enumerable.

#### Example

```js
const set = Enumerable
                  .from([1, 2, 3])
                  .toSet();
// set === new Set([1, 2, 3])
```
