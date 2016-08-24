# `takeLastWhile(condition)`

Create a new Enumerable taking values from the end while `condition` returns true.

#### Arguments

- condition (*function*): function used to determine if an item must be added to the Enumerable

#### Returns

(*Enumerable*): New Enumerable with taken values.

#### Example

```js
Enumerable
        .from([1, 2, 3, 4, 5])
        .takeLastWhile(x => x > 3)
        .toArray()
// [4, 5]
```
