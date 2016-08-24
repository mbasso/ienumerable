# `shuffle()`

Shuffles an Enumerable.

#### Returns

(*Enumerable*): new shuffled Enumerable.

#### Example

```js
Enumerable
        .from([1, 2, 3, 4, 5])
        .shuffle()
        .toArray();
// not [1, 2, 3, 4, 5]
// Eg: [5, 3, 1, 4, 2]
```
