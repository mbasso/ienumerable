# `release(func)`

Release Enumerable's items to a function.

#### Arguments

- func (*function*): function that take the items.

#### Returns

(*any*): value returned by `func`.

#### Example

```js
const func = (...params) => {
  const result = sum(...params);
  console.log(...params, result);
  return result;
};

Enumerable
        .from([2, 5, 9, 2]);
        .release(func);
// console.log(2, 5, 9, 2, 18)
// 18
```
