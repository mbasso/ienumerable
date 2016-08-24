# `avg(getValue = identityFunction)`

Returns the average of selected values.

#### Arguments

- getValue (*function*): function that must return the value to make the average, taking each element.

#### Returns

(*Number*): Average of the elements.

#### Example

```js
Enumerable
        .from(1, 2, 3)
        .avg();
// 2

const people = [
  { username: 'Matteo', age: 19 },
  { username: 'foo', age: 8 },
  { username: 'bar', age: 27 },
];

Enumerable
        .from(people)
        .avg(x => x.age);
// 18
```

#### Aliases

- [`average(getValue = identityFunction)`](/Average.md)
