# `intersect(source)`

Returns a new Enumerable with all elements of the first Enumerable that also belong to `source`.

#### Arguments

- source (*oneOf(Iterable, Enumerable or any)*): items to intersect.

#### Returns

(*Enumerable*): new Enumerable with all elements of the first Enumerable that also belong to `source`.

#### Example

```js
// using any
Enumerable
        .from([1, 2, 3, 4, 5])
        .intersect(3)
        .toArray();
// [3]

// using an Array
Enumerable
        .from([1, 2, 3, 4, 5])
        .intersect([3, 4, 6])
        .toArray();
// [3, 4]

// using an Enumerable
Enumerable
        .from([1, 2, 3, 4, 5])
        .intersect(Enumerable.from([2, 5, 7]))
        .toArray();
// [2, 5]
```
