# `union(source)`

Perform a union between an Enumerable and a source, taking duplicate elements only once.

#### Arguments

- source (*oneOf(Iterable, Enumerable or any)*): items to add to the Enumerable.

#### Returns

(*Enumerable*): new Enumerable with all elements of the two sources.

#### Example

```js
// using any
Enumerable
        .from([1, 2, 3, 4, 5])
        .union(3)
        .toArray();
// [1, 2, 3, 4, 5]

// using an Array
Enumerable
        .from([1, 2, 3, 4, 5])
        .union([3, 4, 6])
        .toArray();
// [1, 2, 3, 4, 5, 6]

// using an Enumerable
Enumerable
        .from([1, 2, 3, 4, 5])
        .union(Enumerable.from([2, 5, 7]))
        .toArray();
// [1, 2, 3, 4, 5, 7]
```
