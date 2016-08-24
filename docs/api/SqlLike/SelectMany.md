# `selectMany(formatter = identityFunction)`

Creates a new Enumerable with the result of calling `formatter` on every element in the Enumerable, flat that Enumerable and returns it.

#### Arguments

- formatter (*function*): function to execute for each element, taking the element.

#### Returns

(*Enumerable*): New Enumerable with formatted values.

#### Example

```js
const data = [
  [
    { username: 'mbasso', name: 'Matteo' },
  ],
  [
    { username: 'foo', name: 'bar' }
    { username: 'test', name: 'bar' }
  ],
];

Enumerable
        .from(data)
        .selectMany(x => x.username)
        .toArray();
// ['mbasso', 'foo', 'test']
```
