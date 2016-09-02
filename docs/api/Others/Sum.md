# `sum(elementSelector = identityFunction)`

Returns the sum of selected values.

#### Arguments

- elementSelector (*function*): function that must return the value to make the sum, taking each element.

#### Returns

(*Number*): sum of the elements.

#### Example

```js
Enumerable
        .from(1, 2, 3)
        .sum();
// 6

const people = [
  { username: 'Matteo', age: 19 },
  { username: 'foo', age: 8 },
  { username: 'bar', age: 27 },
];

Enumerable
        .from(people)
        .sum(x => x.age);
// 54
```
