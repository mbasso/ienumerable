# `toString(separator = ',')`

Create a String from an Enumerable.

#### Arguments

- separator (*String*): separator between elements.

#### Returns

(*String*): A String representing the Enumerable.

#### Example

```js
// using default separator = ','
Enumerable
        .from([1, 2, 3])
        .toString();
// '1,2,3'

// using custom separator
Enumerable
        .from([1, 2, 3])
        .toString(' + ');
// '1 + 2 + 3'
```

#### Tips

See also:
- [toJSON()](/ToJSON.md)
- [toLocaleString()](/ToLocaleString.md)
