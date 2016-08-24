# `update(modifier)`

Create a new Enumerable modifying its elements.

#### Arguments

- modifier (*function*): function used to modify each element, taking the element.

#### Returns

(*Enumerable*): New Enumerable with modified elements.

#### Example

```js
Enumerable
        .from([1, 2, 3])
        .update(x => x * 2)
        .toArray();
// [2, 4, 6]

const data = [{
  foo: 1,
  bar: 2,
}, {
  foo: 2,
  bar: 3,
}];
Enumerable
        .from(data)
        .update(x => {
          x.foo = x.bar;
        })
        .toArray();
// [{
//   foo: 2,
//   bar: 2,
// }, {
//   foo: 3,
//   bar: 3,
// }]
```

#### N.B.

As you can see in the example, only primitive value must be retuned by the `modifier` function,
objects can be modified but not returned. Recalling to IEnumerable features,
`modifier` parameter is a deep copy of the original value, so can modify it without worries.
