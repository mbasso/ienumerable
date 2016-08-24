# `lastIndexOf(item, end = Enumerable length)`

Return the index of the last item in the Enumerable equals to the given.
This is the equivalent of [Array.prototype.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

#### Arguments

- item (*any*): item to search
- end (*Number*): end index

#### Returns

(*Number*): index of the item.

#### Example

```js
Enumerable
        .from([1, 2, 3, 4, 2])
        .lastIndexOf(2);
// 4

Enumerable
        .from([1, 2, 3, 4, 2])
        .lastIndexOf(2, 3);
// 1
```
