# `skipLastWhile(condition)`

Create a new Enumerable from another, skipping values from the end, while `condition` returns true.

#### Arguments

- condition (*function*): function used to determine if an item must be skipped or must be taken

#### Returns

(*Enumerable*): New Enumerable without skipped values.

#### Example

```js
Enumerable
        .from([1, 2, 3, 4, 5])
        .skipLastWhile(x => x > 3)
        .toArray()
// [1, 2, 3]
```
