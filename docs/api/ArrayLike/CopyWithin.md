# `copyWithin(target, start = 0, end = Enumerable length)`

Create a new Enumerable copying part of an Enumerable to another location in the same Enumerable, without modifying its size.
This is the equivalent of [Array.prototype.copyWithin](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

#### Arguments

- target (*Number*): index at which to copy the sequence to. If negative, target will be counted from the end.
- start (*Number*): index at which to start copying elements from. If negative, start will be counted from the end.
- end (*Number*): index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end.

#### Returns

(*Enumerable*): New modified Enumerable.

#### Example

```js
Enumerable
        .from([1, 2, 3, 4, 5])
        .copyWithin(-2)
        .toArray();
// [1, 2, 3, 1, 2]

Enumerable
        .from([1, 2, 3, 4, 5])
        .copyWithin(0, 3)
        .toArray();
// [4, 5, 3, 4, 5]

Enumerable
        .from([1, 2, 3, 4, 5])
        .copyWithin(0, 3, 4)
        .toArray();
// [4, 2, 3, 4, 5]
```
