# `toIterator()`

Create a new [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) from an Enumerable.

#### Returns

(*Iterator*): New [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) created from an Enumerable.

#### Example

```js
const iterator = Enumerable
                  .from([1, 2, 3])
                  .toIterator();
// iterator.next().value = 1
// iterator.next().value = 2
// iterator.next().value = 3
```
