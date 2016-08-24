# `pop(callback = noop)`

Remove the last item at the end of the Enumerable.

#### Returns

(*Enumerable*): New Enumerable without the last item.

#### Example

```js
Enumerable
        .from([1, 2, 3]))
        .pop()
        .toArray();
// [1, 2]
```
