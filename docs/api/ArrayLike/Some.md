# `some(callback)`

Tests whether some element of the Enumerable passes the test implemented by the provided function.
This is the equivalent of [Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

#### Arguments

- callback (*function*): function to execute for each element, taking (element, index, Enumerable.toArray)

#### Returns

(*boolean*): Indicate if one or more elements pass the given test.

#### Example

```js
Enumerable
        .from([2, 1, 3])
        .any(x => x < 2);
// true
```

#### Aliases

- [`any(callback)`](../Others/Any.md)
