# Features

- **Deep immutability**, Enumerable is immutable. But, in addition, also all its content is immutable, don't worry to modify an object, don't worry about side effects.
```js
const foo = { foo: 'bar' };
const bar = Enumerable
                    .from(foo)
                    .first();
console.log(foo === bar); // false
// while
// const bar = [foo][0];
// foo === bar is true
```
- **Advanced object comparison**, by default Enumerable uses a deep comparison algorithm to make it works. Objects are not compared by reference.
```js
const foo = { foo: 'bar' };
const bar = { foo: 'bar' };
const result = Enumerable
                      .from(foo)
                      .includes(bar);
console.log(result); // true
// while
// [foo].includes(bar) is false
```
- **Linq syntax**, high compatible C# Linq syntax makes query easier and immediate to use.
- **Lightweight**, IEnumerable consists only of 34kb weight including all methods and polyfills.
