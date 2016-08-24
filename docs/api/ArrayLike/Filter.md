# `filter(callback[, thisArg])`

Filter an Enumerable based on the given callback.
This is the equivalent of [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

#### Arguments

- callback (*function*): function to execute for each element, taking (element, index, Enumerable.toArray)
- thisArg (*Object*): value to use as this when executing `callback`

#### Returns

(*Enumerable*): New filtered Enumerable.

#### Example

```js
const result = Enumerable
                    .from([1, '32', {}, new Person(), 3, '43'])
                    .filter(x => Number(x) < 40)
                    .toArray();
// [1, '32', 3]
```
