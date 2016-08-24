# `groupJoin(inner, outerKeySelector, innerKeySelector, resultSelector, comparer = Enumerable deep comparison)`

Correlates the elements of two sequences based on equality of keys and groups the results.

#### Arguments

- inner (*oneOf(Iterable, Enumerable or any)*): source to join.
- outerKeySelector (*Function*): function to extract the join key from each element of the first sequence.
- innerKeySelector (*Function*): function to extract the join key from each element of the second sequence.
- resultSelector (*Function*): function to create a result element from an element from the first sequence and an Enumerable of matching elements from the second sequence.
- comparer (*Function*): function to compare keys.

#### Returns

(*Enumerable*): new Enumerable containing elements that are obtained by performing a grouped join on two sequences.

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
        .groupJoin(petArray,
              person => person,
              pet => pet.owner,
              (person, pets) => ({
                ownerName: person.name,
                pets: pets.select(x => x.name).toArray(),
              }))
        .toArray();
// [
//   {
//     ownerName: 'Hedlund, Magnus',
//     pets: ['Daisy'],
//   }, {
//     ownerName: 'Adams, Terry',
//     pets: ['Barley', 'Boots'],
//   }, {
//     ownerName: 'Weiss, Charlotte',
//     pets: ['Whiskers'],
//   }
// ];
```
