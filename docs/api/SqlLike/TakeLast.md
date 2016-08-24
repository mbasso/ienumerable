# `takeLast(n = Enumerable length)`

Returns a new Enumerable with the last `n` elements.

#### Arguments

- n (*Number*): number of elements to take

#### Returns

(*Enumerable*): new Enumerable with the last `n` elements.

#### Example

```js
Enumerable
        .from([4, 7, 2])
        .takeLast(2)
        .toArray();
// [7, 2]
```
