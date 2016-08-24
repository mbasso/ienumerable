# `equals(source)`

Check if items in source are equal to items in an Enumerable.

#### Arguments

- source (*oneOf(Iterable, Enumerable or any)*): items to evaluate.

#### Returns

(*boolean*): represent the equality.

#### Example

```js
// using any
Enumerable
        .from([1, 2, 3])
        .equals(3)
        .toArray();
// false

// using an Array
Enumerable
        .from([1, 2, 3])
        .equals([1, 2, 3])
        .toArray();
// true

// using an Enumerable
Enumerable
        .from([1, 2, 3])
        .equals(Enumerable.from([3, 4]))
        .toArray();
// false
```

#### Aliases

- [`sequenceEqual(source)`](/SequenceEqual.md)
