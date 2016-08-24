# `insert(...items)`

Add the given items to an Enumerable.

#### Arguments

- ...items (*any*): items to add.

#### Returns

(*Enumerable*): new Enumerable with the given items.

#### Example

```js
Enumerable
        .from([1, 2, 3])
        .insert(4, 5)
        .toArray();
// [1, 2, 3, 4, 5]
```
