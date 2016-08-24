# `static repeat(...values, times)`

Create a new Enumerable repeating `...values` for `times`.

#### Arguments

- values (*any*): values to repeat
- times (*Number*): number of times to repeat

#### Returns

(*Enumerable*): New Enumerable that encapsulates data.

#### Example

```js
let i = 0;
result = Enumerable
                .repeat('foo', 'bar', 3)
                .toArray();
// ['foo', 'bar','foo', 'bar','foo', 'bar']
```
