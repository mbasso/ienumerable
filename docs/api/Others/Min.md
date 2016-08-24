# `min(getValue = identityFunction)`

Returns the min item based on a comparison between the given values.

#### Arguments

- getValue (*function*): function that must return the value to compare, taking each element.

#### Returns

(*any*): min of the elements.

#### Example

```js
Enumerable
        .from(1, 2, 3)
        .min();
// 1

const people = [
  { username: 'Matteo', age: 19 },
  { username: 'foo', age: 8 },
  { username: 'bar', age: 27 },
];

Enumerable
        .from(people)
        .min(x => x.age);
// { username: 'foo', age: 8 }
```
