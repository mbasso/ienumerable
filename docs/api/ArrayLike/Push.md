# `push(...items)`

Add items at the end of the Enumerable.
This is the equivalent of [Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

#### Arguments

- ...items (*any*): values to insert at the end of the Enumerable

#### Returns

(*Enumerable*): New Enumerable with the given items.

#### Example

```js
Enumerable
        .from([1, 2, 3]))
        .push(4, 5)
        .toArray();
// [1, 2, 3, 4, 5]
```

#### Aliases

- [`enqueue()`](../Others/Enqueue.md)
