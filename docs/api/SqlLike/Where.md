# `where(callback[, thisArg])`

Filter an Enumerable based on the given callback.

#### Arguments

- callback (*function*): function to execute for each element, taking (element, index, Enumerable.toArray)
- thisArg (*Object*): value to use as this when executing `callback`

#### Returns

(*Enumerable*): New filtered Enumerable.

#### Example

```js
const result = Enumerable
                    .from([1, '32', {}, new Person(), 3, '43'])
                    .where(x => Number(x) < 40)
                    .toArray();
// [1, '32', 3]
```

#### Aliases

- [`having(callback, thisArg)`](/Having.md)
