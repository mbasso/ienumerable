# `toLocaleString()`

Create a [Locale String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString) from an Enumerable.

#### Returns

(*String*): A [Locale String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString) representing the Enumerable.

#### Example

```js
const number = 1337;
const date = new Date();
const myArr = [number, date, 'foo'];

Enumerable
        .from(myArr)
        .toLocaleString();
// "1337,8/5/2016, 6:47:15 PM,foo"
// if run in a German (de-DE) locale with timezone Europe/Berlin
```

#### Tips

See also:
- [toJSON(getKey, getValue)](/ToJSON.md)
- [toString(separator = ',')](/ToString.md)
