# `singleOrDefault(predicate, default)`

Returns first element that satisfy the predicate function.

#### Arguments

- predicate (*function*): function that determines if an element must be taken or not.
- default (*function*): value to return if no element satisfies the predicate.

#### Returns

(*any*): found element or `undefined`.

#### Example

```js
const data = [
  { name: 'foo' surname: 'bar' },
  { name: 'bar' surname: '1' },
  { name: 'Matteo' surname: 'Basso' },
  { name: 'bar' surname: '2' },
];

Enumerable
        .from(data)
        .singleOrDefault(
          x => x.name === 'test',
          { name: 'lorem', surname: 'ipsum' }
        );
// { name: 'lorem', surname: 'ipsum' }
```
