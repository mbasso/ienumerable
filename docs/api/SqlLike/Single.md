# `single(predicate)`

Returns first element that satisfy the predicate function.

#### Arguments

- predicate (*function*): function that determine if an element must be taken or not.

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
        .single(x => x.name === 'bar');
// { name: 'bar' surname: '1' }
```
