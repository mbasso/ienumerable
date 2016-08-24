# `static range(start = 0, end, step = 1)`

Create a new Enumerable taking values from `start` to `end` with `step`.

#### Arguments

- start (*Number*): first number to add
- end (*Number*): last number to add
- step (*Number*): step used to go from start to end

#### Returns

(*Enumerable*): New Enumerable that encapsulates data.

#### Example

```js
// using default step = 1
Enumerable
        .range(3, 7)
        .toArray();
// [3, 4, 5, 6, 7]


// using default start = 0 and step = 1
Enumerable
        .range(3)
        .toArray();
// [0, 1, 2, 3]

// specifying all parameters, step = -1
Enumerable
        .range(3, 0, -1)
        .toArray();
// [3, 2, 1, 0]

// specifying all parameters, step = 5
Enumerable
        .range(0, 20, 5)
        .toArray();
// [0, 5, 10, 15, 20]
```
