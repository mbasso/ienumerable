# `select(formatter = identityFunction)`

Returns a new Enumerable with the results of calling `formatter` function on every element in this Enumerable.

#### Arguments

- formatter (*function*): function to execute for each element, taking the element

#### Returns

(*Enumerable*): New Enumerable with formatted values.

#### Example

```js
const data = [
  { username: 'mbasso', name: 'Matteo' },
  { username: 'foo', name: 'bar' },
];

Enumerable
        .from(data)
        .select(x => x.username)
        .toArray();
// ['mbasso', 'foo']
```
