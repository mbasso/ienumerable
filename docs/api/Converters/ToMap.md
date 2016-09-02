# `toMap(keySelector, elementSelector)`

Create a new [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) from an Enumerable.

#### Arguments

- keySelector (*function*): function that return a key for each element.
- elementSelector (*function*): function that return a value for each element.

#### Returns

(*Map*): New [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) created from an Enumerable.

#### Example

```js
const map = Enumerable
                  .from([1, 2, 3])
                  .toMap(x => x * 2, x => x * 4);
// map === Map (3) {2 => 4, 4 => 8, 6 => 12}
```
