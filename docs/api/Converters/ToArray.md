# `toArray()`

Create a new [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) from an Enumerable.

#### Returns

(*Array*): New [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) created from an Enumerable.

#### Example

```js
const array = Enumerable
                  .from([1, 2, 3])
                  .where(x => x < 3)
                  .toArray();
// array === [1, 2]
```

#### Aliases

- [`toList()`](ToList.md)
