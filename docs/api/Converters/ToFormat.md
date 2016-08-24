# `toFormat(format)`

Create a new object with the given format from an Enumerable.

#### Arguments

- format (*function*): function used to convert Enumerable, it must accept an array as parameter.

#### Returns

(*format*): New Object of the given format.

#### Example

```js
const getTwitterAccount = (array) => ({
  name: array[0],
  username: array[0],
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
- [releaseToFormat(format)](/ReleaseToFormat.md)
- [toType(type)](/ToType.md)
- [releaseToType(type)](/ReleaseToType.md)
