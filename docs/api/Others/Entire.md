# `entire(func)`

Evaluates a function on the array representing the Enumerable.

#### Arguments

- func (*function*): function that take an array representing the Enumerable.

#### Returns

(*any*): value returned by `func`.

#### Example

```js
Enumerable
        .from([2, 1, 3]);
        .entire(x => x.length === 3);
// true
```
