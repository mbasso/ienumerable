# `toJSON()`

Create a JSON String from an Enumerable.

#### Returns

(*String*): JSON String representing the Enumerable.

#### Example

```js
const json = Enumerable
                  .from([1, 2, 3])
                  .toJSON();
// json === '[1,2,3]'
```

#### Tips

See also:
- [toString(separator = ',')](/ToString.md)
- [toLocaleString()](/ToLocaleString.md)
