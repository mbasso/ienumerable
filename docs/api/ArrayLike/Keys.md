# `keys()`

Returns a new Enumerable that contains the keys for each index in the Enumerable.
This is the equivalent of [Array.prototype.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)

#### Returns

(*Enumerable*): New Enumerable of keys.

#### Example

```js
Enumerable
        .from([1, 2, 3])
        .keys()
        .toArray();
// [0, 1, 2]
```
