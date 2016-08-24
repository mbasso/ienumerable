# `orderByDescending(...getValues = identityFunction)`

Order an Enumerable descending with comparison based on values given by `...getValues`.

#### Arguments

- ...getValues (*function*): functions that must return the comparison value, taking each element.

#### Returns

(*Enumerable*): new sorted Enumerable.

#### Example

```js
Enumerable
        .from([5, 3, 4, 1, 2])
        .orderByDescending()
        .toArray();
// [5, 4, 3, 2, 1]

const data = [
  { username: 'mbasso', name: 'Matteo', surname: 'Basso', age: 19 },
  { username: 'fooBar', name: 'Foo', surname: 'Bar', age: 20 },
  { username: 'fooTest', name: 'Foo', surname: 'Test', age: 22 },
  { username: 'fooTest2', name: 'Foo', surname: 'Test', age: 19 },
];

Enumerable
        .from(data)
        .orderBy(x => x.username)
        .toArray();
// [
//   { username: 'fooTest2', name: 'Foo', surname: 'Test', age: 19 },
//   { username: 'fooTest', name: 'Foo', surname: 'Test', age: 22 },
//   { username: 'fooBar', name: 'Foo', surname: 'Bar', age: 20 },
//   { username: 'mbasso', name: 'Matteo', surname: 'Basso', age: 19 },
// ]

Enumerable
        .from(data)
        .orderBy(
          x => x.name,
          x => x.surname,
          x => x.age
        )
        .toArray();
// [
//   { username: 'mbasso', name: 'Matteo', surname: 'Basso', age: 19 },
//   { username: 'fooTest', name: 'Foo', surname: 'Test', age: 22 },
//   { username: 'fooTest2', name: 'Foo', surname: 'Test', age: 19 },
//   { username: 'fooBar', name: 'Foo', surname: 'Bar', age: 20 },
// ]
```
