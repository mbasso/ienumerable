# `reverse()`

Reverses an Enumerable. The first element becomes the last and the last becomes the first.
This is the equivalent of [Array.prototype.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

#### Returns

(*Enumerable*): New reversed Enumerable.

#### Example

```js
Enumerable
      .from([1, 2, 3])
      .reverse()
      .toArray();
// [3, 2, 1]
```
