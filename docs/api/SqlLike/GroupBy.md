# `groupBy(keySelector, elementSelector, resultSelector, comparer = Enumerable deep comparison)`

Groups the elements of a sequence according to a specified key selector function and creates a result value from each group and its key.

#### Arguments

- keySelector (*Function*): function to extract the key for each element.
- elementSelector (*Function*): function to map each source element to an element
- resultSelector (*Function*): function to create a result value from each group, taking key and an Enumerable.
- comparer (*Function*): function to compare keys with.

#### Returns

(*Enumerable*): new Enumerable where each element represents a projection over a group and its key.

#### Example

```js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const animalArray = [
  new Animal('Barley', 8),
  new Animal('Boots', 4),
  new Animal('Whiskers', 1),
  new Animal('Daisy', 4),
];

Enumerable
        .from(animalArray)
        .groupBy(
          x => x.age,
          x => x.name,
          (key, items) => ({
            key,
            count: items.count(),
            sum: items.sum(x => x.length),
            items: items.toArray(),
          }))
        .toArray();
// [
//   {
//     key: 1,
//     count: 1,
//     sum: 8,
//     items: ['Whiskers'],
//   }, {
//     key: 4,
//     count: 2,
//     sum: 10,
//     items: ['Boots', 'Daisy'],
//   }, {
//     key: 8,
//     count: 1,
//     sum: 6,
//     items: ['Barley'],
//   }
// ]
```
