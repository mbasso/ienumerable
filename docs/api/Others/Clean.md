# `clean()`

Removes `undefined` and `null` values from an Enumerable.

#### Returns

(*Enumerable*): new Enumerable without `undefined` and `null`.

#### Example

```js
Enumerable
        .from([1, 2, null, 3, 4, undefined, 5])
        .clean()
        .toArray();
// [1, 2, 3, 4, 5]
```
