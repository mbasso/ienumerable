# `distinct()`

Removes duplicate items in an Enumerable.

#### Returns

(*Enumerable*): new Enumerable without duplicates.

#### Example

```js
Enumerable
        .from([1, 1, 2, 3, 4, 5, 2, 5, 6])
        .distinct()
        .toArray();
// [1, 2, 3, 4, 5, 6]
```
