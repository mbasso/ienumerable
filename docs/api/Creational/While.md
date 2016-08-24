# `static while(condition, provider)`

Create a new Enumerable taking value from `provider` function while `condition` returns true.

#### Arguments

- condition (*function*): function used to determine if an item must be added to the Enumerable
- provider (*function*): function that returns items to add to the Enumerable

#### Returns

(*Enumerable*): New Enumerable that encapsulates data.

#### Example

```js
let i = 0;
result = Enumerable
                .while(
                  () => i++ < 3,
                  () => 42
                )
                .toArray();
// [42, 42, 42]
```

#### Aliases

- [`static getWhile(condition, provider)`](getWhile.md)
