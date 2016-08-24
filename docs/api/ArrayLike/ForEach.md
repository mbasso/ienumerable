# `forEach(callback[, thisArg])`

Executes a provided function once per Enumerable element.
This is the equivalent of [Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

#### Arguments

- callback (*function*): function to execute for each element, taking (element, index, Enumerable.toArray)
- thisArg (*object*): value to use as this when executing `callback`

#### Returns

(*Enumerable*): Original Enumerable.

#### Example

```js
const people = [
  { name: 'foo', age: 19 },
  { name: 'bar', age: 20 },
];

let i = 0;
Enumerable
        .from([people])
        .forEach(x => {
          i += x.age;
        });
// x = 39
```

#### Attention

You cannot modify Enumerable's values inside `forEach`, changes will not be applied in the returned Enumerable. Use [update](../SqlLike/Update.md) instead.
