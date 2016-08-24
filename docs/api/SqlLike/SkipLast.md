# `skipLast(n = 0)`

Returns a new Enumerable without the last `n` elements.

#### Arguments

- n (*Number*): number of elements to skip

#### Returns

(*Enumerable*): new Enumerable without the last `n` elements.

#### Example

```js
Enumerable
        .from([1, 2, 3, 4, 5, 3])
        .skipLast(2)
        .toArray();
// [1, 2, 3, 4]
```
