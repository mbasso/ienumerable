# `indexOf(item, start = 0)`

Return the index of the first item in the Enumerable equals to the given.
This is the equivalent of [Array.prototype.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

#### Arguments

- item (*any*): item to search
- start (*Number*): start index

#### Returns

(*Number*): index of the item.

#### Example

```js
Enumerable
        .from([1, 2, 3, 4, 2])
        .indexOf(2);
// 1

Enumerable
        .from([1, 2, 3, 4, 2])
        .indexOf(2, 2);
// 4
```
