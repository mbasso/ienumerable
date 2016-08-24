# `contains(item)`

Determines if item is in an Enumerable.

#### Arguments

- item (*any*): item to search

#### Returns

(*Number*): number of occurrences of `item` in the Enumerable.

#### Example

```js
Enumerable
        .from([1, 2, 3])
        .contains(4);
// 0
Enumerable
        .from([1, 2, 3, 1, 2, 1, 4])
        .contains(1);
// 3
```
