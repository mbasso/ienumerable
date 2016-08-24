# `map(callback[, thisArg])`

Returns a new Enumerable with the results of calling a provided function on every element in this Enumerable.
This is the equivalent of [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

#### Arguments

- callback (*function*): function to execute for each element, taking (element, index, Enumerable.toArray)
- thisArg (*Object*): value to use as this when executing `callback`

#### Returns

(*Enumerable*): New Enumerable.

#### Example

```js
Enumerable
        .from([1, 2, 3])
        .map(x => x + 1)
        .toArray();
// [2, 3, 4]
```
