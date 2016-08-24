# `delete(...items)`

Removes the given items from an Enumerable.

#### Arguments

- ...items (*any*): items to remove.

#### Returns

(*Enumerable*): new Enumerable without the given items.

#### Example

```js
Enumerable
        .from([1, 2, 3, 4, 5])
        .delete(2, 3, 5)
        .toArray();
// [1, 4]
```

#### Aliases

- [`remove(...items)`](../Others/Remove.md)
