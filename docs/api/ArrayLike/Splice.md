# `splice(start, deleteCount)`

Removes existing items of an Enumerable.
This is the equivalent of [Array.prototype.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

#### Arguments

- start (*Number*): start index
- deleteCount (*Number*): number of items to remove

#### Returns

(*Enumerable*): New Enumerable with deleted items.

#### Example

```js
Enumerable
        .from(['angel', 'clown', 'mandarin', 'surgeon'])
        .splice(2, 0)
        .toArray();
// []

Enumerable
        .from(['angel', 'clown', 'drum', 'mandarin', 'surgeon'])
        .splice(3, 1)
        .toArray();
// ['mandarin']
```
