# `shift(callback = noop)`

Remove the first item at the beginning of the Enumerable.

#### Returns

(*Enumerable*): New Enumerable without the first item.

#### Example

```js
Enumerable
        .from([1, 2, 3]))
        .shift()
        .toArray();
// [2, 3]
```

#### Aliases

- [`dequeue()`](../Others/Dequeue.md)
