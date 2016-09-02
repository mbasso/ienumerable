# `toDictionary(keySelector, elementSelector)`

Create an Object from an Enumerable.

#### Arguments

- keySelector (*function*): function that return a key for each element.
- elementSelector (*function*): function that return a value for each element.

#### Returns

(*Object*): An Object representing the Enumerable

#### Example

```js
const data = [
  { username: 'mbasso', age: 19 },
  { username: 'fooBar', age: 21 },
  { username: 'loremIpsum', age: 19 },
];

Enumerable
        .from(data)
        .toDictionary(
          x => x.username,
          x => x.age,
        );

// {
//   mbasso: 19,
//   fooBar: 21,
//   loremIpsum: 19,
// }
```

#### Tips

See also:
- [toObject()](/toObject.md)
