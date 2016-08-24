# `entries()`

Returns a new Iterator object that contains the key/value pairs for each element in the Enumerable.
This is the equivalent of [Array.prototype.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)

#### Returns

(*Iterator*): New Iterator that contains the key/value pairs for each element in the Enumerable.

#### Example

```js
const result = Enumerable
                    .from(['a', 'b', 'c']))
                    .entries();
// result.next().value = [0, 'a']
// result.next().value = [1, 'b']
// result.next().value = [2, 'c']
```
