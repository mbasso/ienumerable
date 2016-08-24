# `lastOrDefault(default)`

Get the last element of the Enumerable or, if empty, the given value.

#### Arguments

- default (*any*): value to return if Enumerable is empty.

#### Returns

(*any*): last element of the Enumerable or the given value.

#### Example

```js
Enumerable
        .from([1, 2, 3])
        .lastOrDefault(47);
// 3
Enumerable
        .empty()
        .lastOrDefault(47);
// 47
```
