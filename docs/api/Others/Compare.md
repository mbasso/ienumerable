# `compare(comparer)`

Compares the items of an Enumerable and returns the last selected item.

#### Arguments

- comparer (*Function*): function that take the selected item and each element of the Enumerable,
take the first if returns `true`, the second if returns `false`.

#### Returns

(*any*): last selected item.

#### Example

```js
Enumerable
        .from([2, 1, 3, 4, -2])
        .compare((a, b) => a > b);
// 4

// 2 > 1 => select: 2
// 2 > 3 => select: 3
// 3 > 4 => select: 4
// 4 > -2 => select: 4

Enumerable
        .from([2])
        .compare((a, b) => a > b);
// 2
```
