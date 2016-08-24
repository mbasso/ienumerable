# `cast(constructor)`

Convert all items using a given constructor.

#### Arguments

- constructor (*Constructor*): constructor used to convert the items.

#### Returns

(*Enumerable*): new Enumerable with converted values.

#### Example

```js
Enumerable
        .from([1, 2, 3])
        .cast(String)
        .toArray();
// ['1', '2', '3']
```

#### Aliases

- [`convert(type)`](../Others/Convert.md)
