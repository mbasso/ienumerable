# `flatten()`

Flatten an Enumerable.

#### Returns

(*Enumerable*): new flatten Enumerable.

#### Example

```js
// using any
Enumerable
        .from([1, 2, [3, 4], [5]])
        .flatten()
        .toArray();
// [1, 2, 3, 4, 5]
```

#### Aliases

- [`concatAll(callback)`](/ConcatAll.md)
