# `releaseToFormat(format)`

Create a new object with the given format from an Enumerable.

#### Arguments

- format (*function*): function used to convert Enumerable.

#### Returns

(*format*): New Object of the given format.

#### Example

```js
const getTwitterAccount = (name, username) => ({
  name,
  username,
});

Enumerable
        .from(['Matteo Basso', '@Teo_Basso'])
        .toFormat(getTwitterAccount);
// {
//    name: 'Matteo Basso',
//    username: '@Teo_Basso',
// }
```

#### Tips

See also:
- [toFormat(format)](/toFormat.md)
- [toType(type)](/ToType.md)
- [releaseToType(type)](/ReleaseToType.md)
