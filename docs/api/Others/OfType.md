# `ofType(type)`

Filters an Enumerable based on a type.

#### Arguments

- type (*oneOf(String, Constructor)*): type used to filter the Enumerable.

#### Returns

(*Enumerable*): new filtered Enumerable.

#### Example

```js
Enumerable
        .from([1, '2', 3, '4'])
        .ofType('string')
        .toArray();
// ['2', '4']

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const mbasso = new Person('Matteo', 19);

Enumerable
        .from([1, '2', mbasso, new Date()])
        .ofType(Person)
        .toArray();
// [mbasso]
```
