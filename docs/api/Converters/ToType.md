# `toType(type)`

Create a new object of the given type from an Enumerable.

#### Arguments

- type (*T*): type used to convert Enumerable, it must accept an array as parameter.

#### Returns

(*T*): New Object of the given type.

#### Example

```js
class Person {
  constructor(array) {
    this.username = array[0];
    this.name = array[1];
    this.surname = array[2];
    this.age = array[3];
  }
}

Enumerable
        .from(['mbasso', 'Matteo', 'Basso', 19])
        .toType(Person);
// {
//    username: 'mbasso',
//    name: 'Matteo',
//    surname: 'Basso',
//    age: 19,
// }
```

#### Tips

See also:
- [releaseToType(type)](/ReleaseToType.md)
- [toFormat(format)](/toFormat.md)
- [releaseToFormat(format)](/ReleaseToFormat.md)
