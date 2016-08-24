# `every(callback)`

Tests whether all elements of the Enumerable pass the test implemented by the provided function.
This is the equivalent of [Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

#### Arguments

- callback (*function*): function to execute for each element, taking (element, index, Enumerable.toArray)

#### Returns

(*boolean*): Indicate if all elements pass the given test.

#### Example

```js
Enumerable
        .from([2, 1, 3])
        .every(x => x < 2);
// false
```

#### Aliases

- [`all(callback)`](../Others/All.md)
