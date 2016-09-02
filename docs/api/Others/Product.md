# `product(elementSelector = identityFunction)`

Returns the product of selected values.

#### Arguments

- elementSelector (*function*): function that must return the value to make the product, taking each element.

#### Returns

(*Number*): product of the elements.

#### Example

```js
Enumerable
        .from(1, 2, 3)
        .product();
// 6

const people = [
  { username: 'Matteo', age: 19 },
  { username: 'foo', age: 8 },
  { username: 'bar', age: 27 },
];

Enumerable
        .from(people)
        .product(x => x.age);
// 4104
```

#### Aliases

- [`multiply(elementSelector = identityFunction)`](/Multiply.md)
