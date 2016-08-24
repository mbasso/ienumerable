# Examples

Every [api](../api/README.md) in this doc has an example, so, you can simply search what you are interested in and see how it works.

However, here is a simple example:

```js
// represents an Address
class Address {
  constructor(city, state, ...params) {
    this.city = city;
    this.state = state;
  }
}

// List of addresses, with:
// 8 lorem with state = 'MA'
// 6 foo with state = 'MA'
// 4 bar with state = 'MA'
// other Addresses
const AddressArray = [
  new Address('foo', 'MA'),
  new Address('foo', 'MA'),
  new Address('ipsum', 'MA'),
  new Address('foo', 'MA'),
  new Address('lorem', 'MA'),
  new Address('bar', 'MA'),
  new Address('lorem', 'MA'),
  new Address('bar', 'MA'),
  new Address('foo', 'MA'),
  new Address('foo', 'MA'),
  new Address('ipsum', 'MA'),
  new Address('foo', 'MA'),
  new Address('lorem', 'MA'),
  new Address('bar', 'MA'),
  new Address('lorem', 'MA'),
  new Address('bar', 'MA'),
  new Address('lorem', 'MA'),
  new Address('lorem', 'MA'),
  new Address('lorem', 'MA'),
  new Address('lorem', 'MA'),
  new Address('foo', 'lorem'),
  new Address('foo', 'lorem'),
  new Address('ipsum', 'loremlorem'),
  new Address('foo', 'lorem'),
  new Address('lorem', 'lorem'),
  new Address('bar', 'lorem'),
  new Address('lorem', 'lorem'),
  new Address('bar', 'lorem'),
];

/*
select City, CNT=Count(1)
From Address
Where State = 'MA'
Group By City
Having Count(1)>5
*/

// translating that select using an Enumerable
Enumerable
        .from(AddressArray)
        .where(x => x.state === 'MA')
        .groupBy(
          x => x.city,
          x => x,
          (key, items) => ({
            key,
            count: items.count(),
          })
        )
        .having(x => x.count > 5)
        .select(x => {
          city: x.key,
          count: x.count,
        })
        .toArray();
// [
//   {
//     city: 'lorem',
//     count: 8,
//   }, {
//     city: 'foo',
//     count: 6,
//   }
// ]
```
