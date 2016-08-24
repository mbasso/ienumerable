# `unshift(...items)`

Add items at the beginning of the Enumerable.
This is the equivalent of [Array.prototype.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

#### Arguments

- ...items (*any*): values to insert at the beginning of the Enumerable

#### Returns

(*Enumerable*): New Enumerable with the given items.

#### Example

```js
Enumerable
        .from([3, 4, 5]))
        .unshift(1, 2)
        .toArray();
// [1, 2, 3, 4, 5]
```
