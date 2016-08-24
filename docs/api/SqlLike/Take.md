# `take(n = Enumerable length)`

Returns a new Enumerable with the first `n` elements.

#### Arguments

- n (*Number*): number of elements to take

#### Returns

(*Enumerable*): new Enumerable with the first `n` elements.

#### Example

```js
Enumerable
        .from([4, 7, 2])
        .take(2)
        .toArray();
// [4, 7]
```
