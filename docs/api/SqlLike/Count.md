# `count(predicate = trueFunction)`

Returns the number of elements that satisfy the predicate.

#### Arguments

- predicate (*function*): function that determine if an element must be counted or not.

#### Returns

(*Number*): number of elements that satisfy the predicate.

#### Example

```js
Enumerable
        .from([1, 32, 54, 2])
        .count();
// 4

const data = [
  { name: 'foo' surname: 'bar' },
  { name: 'bar' surname: '1' },
  { name: 'Matteo' surname: 'Basso' },
  { name: 'bar' surname: '2' },
];

Enumerable
        .from(data)
        .count(x => x.name === 'bar');
// 2
```
