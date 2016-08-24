# `defaultIfEmpty(...items)`

Creates a new Enumerable with the given items if empty.

#### Arguments

- ...items (*any*): items used to create a new Enumerable if empty.

#### Returns

(*Enumerable*): new, not empty, Enumerable.

#### Example

```js
Enumerable
        .from([1, 2, 3])
        .defaultIfEmpty(4, 5, 6)
        .toArray();
// [1, 2, 3]

Enumerable
        .from([])
        .defaultIfEmpty(4, 5, 6)
        .toArray();
// [4, 5, 6]
```
