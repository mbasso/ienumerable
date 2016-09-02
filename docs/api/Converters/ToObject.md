# `toObject()`

Create an Object from an Enumerable.

#### Returns

(*Object*): An Object representing the Enumerable

#### Example

```js
const data = [
  { username: 'mbasso', age: 19 },
  { username: 'fooBar', age: 21 },
  { username: 'loremIpsum', age: 19 },
];

// using custom separator
Enumerable
        .from(data)
        .toObject();

// {
//   0: { username: 'mbasso', age: 19 },
//   1: { username: 'fooBar', age: 21 },
//   2: { username: 'loremIpsum', age: 19 },
// }
```

#### Tips

See also:
- [toDictionary(keySelector, elementSelector)](/ToDictionary.md)
