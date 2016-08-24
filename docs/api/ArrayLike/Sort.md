# `sort([compareFunction])`

Sorts the elements of an Enumerable.
This is the equivalent of [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

#### Arguments

- compareFunction (*function*): same as [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) parameter

#### Returns

(*Enumerable*): New sorted Enumerable.

#### Example

```js
Enumerable
        .from([3, 1, 2])
        .sort()
        .toArray();
// [1, 2, 3]

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];

const sortByName = (a, b) => {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
};

Enumerable
        .from(items)
        .sort(sortByName)
        .toArray();
// [
//   { name: 'And', value: 45 },
//   { name: 'Edward', value: 21 },
//   { name: 'Magnetic' },
//   { name: 'Sharpe', value: 37 },
//   { name: 'The', value: -12 },
//   { name: 'Zeros', value: 37 }
// ]
```
