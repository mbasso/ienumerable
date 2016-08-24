# `slice(start = 0, end = Enumerable length)`

Returns a new Enumerable from a portion of another Enumerable.
This is the equivalent of [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

#### Arguments

- start (*Number*): index at which to begin extraction
- end (*Number*):  index at which to end extraction

#### Returns

(*Enumerable*): New Enumerable representing a portion of another.

#### Example

```js
Enumerable
        .from([1, 2, 3])
        .slice(0, 1)
        .toArray();
// [1]
```
