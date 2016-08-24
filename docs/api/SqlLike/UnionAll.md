# `unionAll(source)`

Perform a union between an Enumerable and a source.

#### Arguments

- source (*oneOf(Iterable, Enumerable or any)*): items to add to the Enumerable.

#### Returns

(*Enumerable*): new Enumerable with all elements of the two sources.

#### Example

```js
// using any
Enumerable
        .from([1, 2, 3, 4, 5])
        .unionAll(3)
        .toArray();
// [1, 2, 3, 4, 5, 3]

// using an Array
Enumerable
        .from([1, 2, 3, 4, 5])
        .unionAll([3, 4, 6])
        .toArray();
// [1, 2, 3, 4, 5, 3, 4, 6]

// using an Enumerable
Enumerable
        .from([1, 2, 3, 4, 5])
        .unionAll(Enumerable.from([2, 5, 7]))
        .toArray();
// [1, 2, 3, 4, 5, 2, 5, 7]
```

#### Aliases

- [`concat(source)`](../ArrayLike/Concat.md)
