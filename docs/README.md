# IEnumerable

[![Build Status](https://travis-ci.org/mbasso/ienumerable.svg?branch=master)](https://travis-ci.org/mbasso/ienumerable)
[![npm version](https://img.shields.io/npm/v/ienumerable.svg)](https://www.npmjs.com/package/ienumerable)
[![npm downloads](https://img.shields.io/npm/dm/ienumerable.svg?maxAge=2592000)](https://www.npmjs.com/package/ienumerable)
[![Coverage Status](https://coveralls.io/repos/github/mbasso/ienumerable/badge.svg?branch=master)](https://coveralls.io/github/mbasso/ienumerable?branch=master)
[![Join the chat at https://gitter.im/mbasso/ienumerable](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mbasso/ienumerable?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Deep immutable, Lightweight Enumerable with superpowers

- - -

**Attention - there are some important differences between IEnumerable and other existing LINQ implementations. You can find an example [here](https://jsbin.com/figicok/edit?js,console) and IEnumerable features explanation [here](http://ienumerable.js.org/docs/introduction/Features.html).**

- - -

IEnumerable is a library that allows you to create deeply immutable collections and query them with a Linq syntax. IEnumerable infact, is born from the idea to bring [Linq](https://msdn.microsoft.com/en-us/library/bb397926.aspx) in JavaScript environment. Linq is a fantastic technique to query data and JavaScript should have it. In addition, we want to maintain the advantages of [Immutable Js](https://facebook.github.io/immutable-js/) and improve them. In IEnumerable, not only the collection is immutable but also its content. Every method will return a new Enumerable and a new copy of its content.
IEnumerable should not be confused with [Rx](http://reactivex.io/) due to its syntax, IEnumerable and Rx are two different things that achieve different purposes. [Here](http://stackoverflow.com/questions/17082255/when-to-use-ienumerable-vs-iobservable) is an interesting question about that.

## Installation

You can install IEnumerable using [npm](https://www.npmjs.com/package/ienumerable):

```bash
npm install --save ienumerable
```

If you aren't using npm in your project, you can include IEnumerable using UMD build in the dist folder with `<script>` tag.

## Usage

IEnumerable exports only one class to do its work. A complete guide about usage can be found [here](https://mbasso.github.io/ienumerable/docs/api/index.html).
However, here is the gist:

```js
import Enumerable from 'ienumerable';

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

## Documentation

* [Introduction](https://mbasso.github.io/ienumerable/docs/introduction/index.html)
* [Glossary](https://mbasso.github.io/ienumerable/docs/Glossary.html)
* [API Reference](https://mbasso.github.io/ienumerable/docs/api/index.html)

## Examples

You can check for examples on the official page, [here](https://mbasso.github.io/ienumerable/docs/introduction/Examples.html).

# Chat

This project has an official chat channel on [gitter](https://gitter.im/).
This is the right place to talk about IEnumerable with us and others developers.
Feel free to participate.

Join chat [here](https://gitter.im/mbasso/ienumerable).

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).  
Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/mbasso/ienumerable/releases) page.

## Authors
**Matteo Basso**
- [github/mbasso](https://github.com/mbasso)
- [@Teo_Basso](https://twitter.com/Teo_Basso)

## Copyright and License
Copyright (c) 2016, Matteo Basso.

IEnumerable source code is licensed under the [MIT License](https://github.com/mbasso/ienumerable/blob/master/LICENSE.md).
