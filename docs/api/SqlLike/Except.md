# `except(source)`

Removes items in `source` from an Enumerable.

#### Arguments

- source (*oneOf(Iterable, Enumerable or any)*): items to remove.

#### Returns

(*Enumerable*): new Enumerable without items in `source`.

#### Example

```js
// using any
Enumerable
        .from([1, 2, 3, 4, 5]
        .except(3)
        .toArray();
// [1, 2, 4, 5]

// using an Array
Enumerable
        .from([1, 2, 3, 4, 5]
        .except([3, 4])
        .toArray();
// [1, 2, 5]

// using an Enumerable
Enumerable
        .from([1, 2, 3, 4, 5]
        .except(Enumerable.from([3, 4]))
        .toArray();
// [1, 2, 5]
```
