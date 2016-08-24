# `max(getValue = identityFunction)`

Returns the max item based on a comparison between the given values.

#### Arguments

- getValue (*function*): function that must return the value to compare, taking each element.

#### Returns

(*any*): max of the elements.

#### Example

```js
Enumerable
        .from(1, 2, 3)
        .max();
// 3

const people = [
  { username: 'Matteo', age: 19 },
  { username: 'foo', age: 8 },
  { username: 'bar', age: 27 },
];

Enumerable
        .from(people)
        .max(x => x.age);
// { username: 'bar', age: 27 }
```
