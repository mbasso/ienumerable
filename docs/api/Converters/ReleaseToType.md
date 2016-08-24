# `releaseToType(type)`

Create a new object of the given type from an Enumerable.

#### Arguments

- type (*T*): type used to convert Enumerable.

#### Returns

(*T*): New Object of the given type.

#### Example

```js
class Person {
  constructor(username, name, surname, age) {
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.age = age;
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
- [toType(type)](/ToType.md)
- [toFormat(format)](/toFormat.md)
- [releaseToFormat(format)](/ReleaseToFormat.md)
