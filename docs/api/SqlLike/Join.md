# `join(inner, outerKeySelector, innerKeySelector, resultSelector, comparer = Enumerable deep comparison)`

Correlates the elements of two sequences based on matching keys.

#### Arguments

- inner (*oneOf(Iterable, Enumerable or any)*): source to join.
- outerKeySelector (*Function*): function to extract the join key from each element of the first sequence.
- innerKeySelector (*Function*): function to extract the join key from each element of the second sequence.
- resultSelector (*Function*): function to create a result element from two matching elements.
- comparer (*Function*): function to compare keys.

#### Returns

(*Enumerable*): new Enumerable containing elements that are obtained by performing an inner join on two sequences.

#### Example

```js
class Owner {
  constructor(name) {
    this.name = name;
  }
}

class Pet {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }
}

const magnus = new Owner('Hedlund, Magnus');
const terry = new Owner('Adams, Terry');
const charlotte = new Owner('Weiss, Charlotte');

const ownerArray = [
  magnus,
  terry,
  charlotte,
];

const petArray = [
  new Pet('Barley', terry),
  new Pet('Boots', terry),
  new Pet('Whiskers', charlotte),
  new Pet('Daisy', magnus),
];

Enumerable
        .from(ownerArray)
        .join(petArray,
              person => person,
              pet => pet.owner,
              (person, pet) => ({
                ownerName: person.name,
                pet: pet.name,
              }))
        .toArray();
// [
//   {
//     ownerName: 'Hedlund, Magnus',
//     pet: 'Daisy',
//   }, {
//     ownerName: 'Adams, Terry',
//     pet: 'Barley',
//   }, {
//     ownerName: 'Adams, Terry',
//     pet: 'Boots',
//   }, {
//     ownerName: 'Weiss, Charlotte',
//     pet: 'Whiskers',
//   }
// ]
```
