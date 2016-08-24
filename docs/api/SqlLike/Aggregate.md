# `aggregate(callback[, initialValue])`

Applies a function against an accumulator and each value of the Enumerable (from left-to-right) to reduce it to a single value.

#### Arguments

- callback (*Function*): function to execute on each value in the Enumerable, taking four arguments:

    **previousValue**: value returned from the last invocation of the callback, or initialValue.

    **currentValue**: current value to process.

    **currentIndex**: index of the current element.

    **array**: an array representing the Enumerable.

- initialValue (*any*): value used as first accumulator.

#### Returns

(*any*): value resulting from aggregate.

#### Example

```js
Enumerable
        .from([1, 2, 3])
        .aggregate((a, b) => a + b);
// 6

// a = 1, b = 2 => 3
// a = 2, b = 3 => 6

Enumerable
        .from([1, 2, 3])
        .aggregate((a, b) => a + b, 2);
// 8

// a = 2, b = 1 => 3
// a = 3, b = 2 => 5
// a = 5, b = 3 => 8
```

#### Aliases

- [`reduce(callback, initialValue)`](../ArrayLike/Reduce.md)
