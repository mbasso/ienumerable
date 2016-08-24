# `firstOrDefault(default)`

Get the first element of the Enumerable or, if empty, the given value.

#### Arguments

- default (*any*): value to return if Enumerable is empty.

#### Returns

(*any*): first element of the Enumerable or the given value.

#### Example

```js
Enumerable
        .from([1, 2, 3])
        .firstOrDefault(47);
// 1
Enumerable
        .empty()
        .firstOrDefault(47);
// 47
```
