# `static from(source)`

Create a new Enumerable from the given `source`. Depending on `source` type, Enumerable will be created in a different way.

#### Arguments

- source (*oneOf(String, Iterable, arguments or any)*): source to use in order to create the Enumerable

#### Returns

(*Enumerable*): New Enumerable that encapsulates data.

#### Example

```js
// from Array
Enumerable
        .from([1, 2, 3])
        .toArray();
// [1, 2, 3]

// from Iterable
Enumerable
        .from(new Set([1, 2, 3]))
        .toArray();
// [1, 2, 3]

// from any
Enumerable
        .from(1)
        .toArray();
// [1]

// from String
Enumerable
        .from('foo')
        .toArray();
// ['f', 'o', 'o']

// from arguments
Enumerable
        .from(1, 2, 3)
        .toArray();
// [1, 2, 3]
```
