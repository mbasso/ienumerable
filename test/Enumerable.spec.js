import expect from 'expect';
import deepFreeze from 'deep-freeze';
import Enumerable from '../src/';

class Person {
  constructor(username, name, surname, age) {
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

const mbasso = new Person('mbasso', 'Matteo', 'Basso', 19);
const fooBar = new Person('fooBar', 'Foo', 'Bar', 21);
const loremIpsum = new Person('loremIpsum', 'Lorem', 'Ipsum', 19);

deepFreeze(mbasso);
deepFreeze(fooBar);
deepFreeze(loremIpsum);

const peopleArray = [
  mbasso,
  fooBar,
  loremIpsum,
];

deepFreeze(peopleArray);

describe('Enumerable', () => {
  const peopleEnumerable = Enumerable
                                  .from(peopleArray);
  deepFreeze(peopleEnumerable);

  describe('Immutability', () => {
    afterEach(() => {
      Enumerable.deepImmutable = true;
      Enumerable.deepComparison = true;
    });

    it('should be deep immutable', () => {
      const foo = { foo: 'bar' };
      const bar = Enumerable
                        .from(foo)
                        .first();
      expect(bar).toEqual({ foo: 'bar' });
      expect(foo === bar).toEqual(false);
    });

    it('should not be deep immutable', () => {
      Enumerable.deepImmutable = false;
      let foo = { foo: 'bar' };
      let bar = Enumerable
                        .from(foo)
                        .first();
      expect(bar).toEqual({ foo: 'bar' });
      expect(foo === bar).toBeTruthy();
      foo = ['foo', 'bar'];
      bar = Enumerable.from(foo)
                      .toArray();
      expect(foo === bar).toBeFalsy();
    });

    it('should perform deep comparison', () => {
      const foo = { foo: 'bar' };
      const bar = { foo: 'bar' };
      const result = Enumerable
                          .from(foo)
                          .includes(bar);
      expect(result).toEqual(true);
    });

    it('should not perform deep comparison', () => {
      Enumerable.deepComparison = false;
      const foo = { foo: 'bar' };
      const bar = { foo: 'bar' };
      const result = Enumerable
                          .from(foo)
                          .includes(bar);
      expect(result).toBeFalsy();
    });
  });

  describe('Creational', () => {
    it('should generate from', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .toArray();
      expect(result).toEqual([1, 2, 3]);
      result = Enumerable
                      .from(1)
                      .toArray();
      expect(result).toEqual([1]);
      result = Enumerable
                      .from('foo')
                      .toArray();
      expect(result).toEqual(['f', 'o', 'o']);
      result = Enumerable
                      .from(1, 2, 3)
                      .toArray();
      expect(result).toEqual([1, 2, 3]);
      result = Enumerable
                      .from(new Set([1, 2, 3]))
                      .toArray();
      expect(result).toEqual([1, 2, 3]);
      result = Enumerable
                      .from(null)
                      .toArray();
      expect(result).toEqual([null]);
      result = Enumerable
                      .from([])
                      .toArray();
      expect(result).toEqual([]);
      result = Enumerable
                      .from(7)
                      .toArray();
      expect(result).toEqual([7]);
      result = Enumerable
                      .from(Enumerable.from(5))
                      .toArray();
      expect(result).toEqual([5]);
      const func = () => true;
      result = Enumerable
                      .from(func)
                      .toArray();
      expect(result).toEqual([func]);
    });

    it('should generate empty', () => {
      const result = Enumerable
                      .empty()
                      .toArray();
      expect(result).toEqual([]);
    });

    it('should generate with range', () => {
      let result = Enumerable
                      .range(3, 7)
                      .toArray();
      expect(result).toEqual([3, 4, 5, 6, 7]);
      result = Enumerable
                .range(3)
                .toArray();
      expect(result).toEqual([0, 1, 2, 3]);
      result = Enumerable
                .range(3, 0, -1)
                .toArray();
      expect(result).toEqual([3, 2, 1, 0]);
      result = Enumerable
                .range(0, 20, 5)
                .toArray();
      expect(result).toEqual([0, 5, 10, 15, 20]);
    });

    it('should generate with repetition', () => {
      let result = Enumerable
                      .repeat('foo', 3)
                      .toArray();
      expect(result).toEqual(['foo', 'foo', 'foo']);
      result = Enumerable
                      .repeat('foo', 'bar', 3)
                      .toArray();
      expect(result).toEqual(['foo', 'bar', 'foo', 'bar', 'foo', 'bar']);
    });

    it('should get while', () => {
      let i = 0;
      let result = Enumerable
                      .while()
                      .toArray();
      expect(result).toEqual([]);
      result = Enumerable
                      .while(() => i++ < 3, () => 42)
                      .toArray();
      expect(result).toEqual([42, 42, 42]);
    });
  });

  describe('Converters', () => {
    it('should convert to iterator', () => {
      const result = peopleEnumerable
                      .toIterator();
      expect(typeof result === 'object').toBeTruthy();
      expect(typeof result.next === 'function').toBeTruthy();
    });

    it('should convert to Array', () => {
      const result = peopleEnumerable
                      .toArray();
      expect(result).toMatch(peopleArray);
    });

    it('should convert to JSON', () => {
      const result = peopleEnumerable
                      .toJSON();
      expect(result).toEqual(JSON.stringify(peopleArray));
    });

    it('should convert to string', () => {
      const data = Enumerable
                      .from([1, 2, 3]);
      let result = data
                      .toString();
      expect(result).toEqual('1,2,3');
      result = data
                  .toString(' + ');
      expect(result).toEqual('1 + 2 + 3');
    });

    it('should convert to locale string', () => {
      const number = 1337;
      const date = new Date();
      const result = Enumerable
                      .from([number, date, 'foo'])
                      .toLocaleString();
      expect(result).toBeA('string');
    });

    it('should convert to dictionary', () => {
      let result = peopleEnumerable
                              .toDictionary(x => x.username, x => x.age);
      expect(result).toMatch({
        mbasso: 19,
        fooBar: 21,
        loremIpsum: 19,
      });
      result = peopleEnumerable
                              .toDictionary(x => x.username);
      expect(result).toMatch({
        mbasso: peopleArray[0],
        fooBar: peopleArray[1],
        loremIpsum: peopleArray[2],
      });
      result = peopleEnumerable
                              .toDictionary();
      expect(result).toMatch({
        0: peopleArray[0],
        1: peopleArray[1],
        2: peopleArray[2],
      });
    });

    it('should convert to dictionary', () => {
      const result = peopleEnumerable
                              .toObject();
      expect(result).toMatch({
        0: peopleArray[0],
        1: peopleArray[1],
        2: peopleArray[2],
      });
    });

    it('should release to type', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .releaseToType();
      expect(result).toEqual([1, 2, 3]);
      result = Enumerable
                      .from(['mbasso', 'Matteo', 'Basso', 19])
                      .releaseToType(Person);
      expect(result).toBeA(Person);
      expect(result).toMatch({
        username: 'mbasso',
        name: 'Matteo',
        surname: 'Basso',
        age: 19,
      });
      result = Enumerable
                      .from([1, 2, 3])
                      .releaseToType((...array) => [0, ...array, 4]);
      expect(result).toEqual([0, 1, 2, 3, 4]);
    });

    it('should convert to type', () => {
      class Foo {
        constructor(info) {
          this.bar = info;
        }
      }
      let result = Enumerable
                      .from([1, 2, 3])
                      .toType();
      expect(result).toEqual([1, 2, 3]);
      result = Enumerable
                      .from(['mbasso', 'Matteo', 'Basso', 19])
                      .toType(Foo);
      expect(result).toBeA(Foo);
      expect(result.bar).toMatch(['mbasso', 'Matteo', 'Basso', 19]);
      result = Enumerable
                      .from([1, 2, 3])
                      .toType((array) => [0, ...array, 4]);
      expect(result).toEqual([0, 1, 2, 3, 4]);
    });

    it('should convert to map', () => {
      const data = Enumerable
                      .from([1, 2, 3]);
      let result = data
                      .toMap();
      expect(result).toBeA(Map);
      expect(result.size).toEqual(3);
      expect(result.get(0)).toEqual(1);
      expect(result.get(1)).toEqual(2);
      expect(result.get(2)).toEqual(3);
      result = data
                  .toMap(x => x * 2);
      expect(result).toBeA(Map);
      expect(result.size).toEqual(3);
      expect(result.get(2)).toEqual(1);
      expect(result.get(4)).toEqual(2);
      expect(result.get(6)).toEqual(3);
      result = data
                  .toMap(x => x * 2, x => x * 4);
      expect(result).toBeA(Map);
      expect(result.size).toEqual(3);
      expect(result.get(2)).toEqual(4);
      expect(result.get(4)).toEqual(8);
      expect(result.get(6)).toEqual(12);
    });

    it('should convert to set', () => {
      const result = Enumerable
                      .from([1, 2, 3])
                      .toSet();
      expect(result).toBeA(Set);
      expect([...result]).toEqual([1, 2, 3]);
    });
  });

  describe('Sql like', () => {
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
    deepFreeze(magnus);
    deepFreeze(terry);
    deepFreeze(charlotte);

    const ownerArray = [
      magnus,
      terry,
      charlotte,
    ];
    deepFreeze(ownerArray);

    const petArray = [
      new Pet('Barley', terry),
      new Pet('Boots', terry),
      new Pet('Whiskers', charlotte),
      new Pet('Daisy', magnus),
    ];
    deepFreeze(petArray);


    class PetOwner {
      constructor(name, pets) {
        this.name = name;
        this.pets = pets;
      }
    }

    const petOwnerArray = [
      new PetOwner('Higa, Sidney', ['Scruffy', 'Sam']),
      new PetOwner('Ashkenazi, Ronen', ['Walker', 'Sugar']),
      new PetOwner('Price, Vernette', ['Scratches', 'Diesel']),
    ];
    deepFreeze(petOwnerArray);

    const petOwnerEnumerable = Enumerable
                                .from(petOwnerArray);
    deepFreeze(petOwnerEnumerable);

    const peopleToSortArray = [
      new Person('mbasso', 'Matteo', 'Basso', 19),
      new Person('fooBar', 'Foo', 'Bar', 20),
      new Person('fooTest', 'Foo', 'Test', 22),
      new Person('fooTest2', 'Foo', 'Test', 19),
    ];
    deepFreeze(peopleToSortArray);

    const peopleToSortEnumerable = Enumerable
                                          .from(peopleToSortArray);
    deepFreeze(peopleToSortEnumerable);

    it('should select', () => {
      let result = peopleEnumerable
                      .select()
                      .toArray();
      expect(result).toMatch(peopleArray);
      result = peopleEnumerable
                      .select(x => x.name)
                      .toArray();
      expect(result).toEqual(['Matteo', 'Foo', 'Lorem']);
      result = petOwnerEnumerable
                      .select(x => x.pets)
                      .toArray();
      expect(result).toEqual([['Scruffy', 'Sam'], ['Walker', 'Sugar'], ['Scratches', 'Diesel']]);
    });

    it('should select many', () => {
      let result = petOwnerEnumerable
                      .selectMany(x => x.pets)
                      .toArray();
      expect(result).toEqual(['Scruffy', 'Sam', 'Walker', 'Sugar', 'Scratches', 'Diesel']);
      result = Enumerable
                      .from([[1, 2], [3, 4], [5, 6]])
                      .selectMany()
                      .toArray();
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should get element at', () => {
      const data = Enumerable
                        .from([1, 2, 3]);
      let result = data
                      .elementAt(1);
      expect(result).toEqual(2);
      result = data
                  .elementAt(5);
      expect(result).toEqual(undefined);
    });

    it('should get element at or default', () => {
      const data = Enumerable
                        .from([1, 2, 3]);
      let result = data
                      .elementAtOrDefault(1, 100);
      expect(result).toEqual(2);
      result = data
                  .elementAtOrDefault(5, 100);
      expect(result).toEqual(100);
    });

    it('should take first', () => {
      const result = peopleEnumerable
                      .first();
      expect(result).toMatch(peopleArray[0]);
    });

    it('should take last', () => {
      let result = peopleEnumerable
                      .last();
      expect(result).toMatch(peopleArray[2]);
      result = Enumerable
                      .empty()
                      .last();
      expect(result).toMatch(undefined);
    });

    it('should order ascending', () => {
      let result = Enumerable
                      .from([5, 2, 3, 1, 4])
                      .orderByAscending()
                      .toArray();
      expect(result).toMatch([1, 2, 3, 4, 5]);
      result = peopleEnumerable
                    .orderByAscending(x => x.age)
                    .toArray();
      expect(result).toMatch([peopleArray[0], peopleArray[2], peopleArray[1]]);
      result = Enumerable
                      .from([2, 3, 1])
                      .orderBy()
                      .toArray();
      expect(result).toEqual([1, 2, 3]);
      result = peopleToSortEnumerable
                      .orderBy(
                        x => x.name,
                        x => x.surname,
                        x => x.age
                      )
                      .toArray();
      expect(result).toMatch([
        peopleToSortArray[1],
        peopleToSortArray[3],
        peopleToSortArray[2],
        peopleToSortArray[0],
      ]);
    });

    it('should order descending', () => {
      let result = Enumerable
                      .from([5, 2, 3, 1, 4])
                      .orderByDescending()
                      .toArray();
      expect(result).toMatch([5, 4, 3, 2, 1]);
      result = peopleEnumerable
                    .orderByDescending(x => x.age)
                    .toArray();
      expect(result).toMatch([peopleArray[1], peopleArray[0], peopleArray[2]]);
      result = peopleToSortEnumerable
                      .orderByDescending(
                        x => x.name,
                        x => x.surname,
                        x => x.age
                      )
                      .toArray();
      expect(result).toMatch([
        peopleToSortArray[0],
        peopleToSortArray[2],
        peopleToSortArray[3],
        peopleToSortArray[1],
      ]);
    });

    it('should count', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .count();
      expect(result).toEqual(3);
      result = peopleEnumerable
                      .count(x => x.age === 19);
      expect(result).toEqual(2);
    });

    it('should aggregate', () => {
      let result = Enumerable
                          .from([1, 2, 3])
                          .aggregate((a, b) => a + b);
      expect(result).toEqual(6);
      result = Enumerable
                      .from([1, 2, 3])
                      .aggregate((a, b) => a + b, 2);
      expect(result).toEqual(8);
      result = Enumerable
                      .empty()
                      .aggregate((a, b) => a + b);
      expect(result).toEqual(undefined);
      result = Enumerable
                      .empty()
                      .aggregate((a, b) => a + b, 0);
      expect(result).toEqual(0);
    });

    it('should aggregate right', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .aggregateRight((a, b) => a + b, 0);
      expect(result).toEqual(6);
      result = Enumerable
                      .empty()
                      .aggregateRight((a, b) => a + b);
      expect(result).toEqual(undefined);
      result = Enumerable
                      .empty()
                      .aggregateRight((a, b) => a + b, 0);
      expect(result).toEqual(0);
    });

    it('should remove duplicates', () => {
      const result = Enumerable.from([1, 1, 2, 3, 4, 5, 2, 5, 6])
                      .distinct()
                      .toArray();
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should update', () => {
      const data = [{
        foo: 1,
        bar: 2,
      }, {
        foo: 2,
        bar: 3,
      }];
      let result = Enumerable
                      .from(data)
                      /* eslint-disable */
                      .update(x => {
                        x.foo = x.bar;
                      })
                      /* eslint-enable */
                      .toArray();
      expect(result).toEqual([{
        foo: 2,
        bar: 2,
      }, {
        foo: 3,
        bar: 3,
      }]);
      result = Enumerable
                      .from([[{
                        foo: 1,
                        bar: 2,
                      }], [{
                        foo: 3,
                        bar: 4,
                      }]])
                      /* eslint-disable */
                      .update(x => {
                        x[0].foo = x[0].bar;
                      })
                      /* eslint-enable */
                      .toArray();
      expect(result).toEqual([[{
        foo: 2,
        bar: 2,
      }], [{
        foo: 4,
        bar: 4,
      }]]);
      result = Enumerable
                      .from([1, 2, 3])
                      .update(x => x * 2)
                      .toArray();
      expect(result).toEqual([2, 4, 6]);
    });

    it('should cast', () => {
      const result = Enumerable.from([1, 2, 3])
                      .cast(String)
                      .toArray();
      expect(result).toEqual(['1', '2', '3']);
    });

    it('should except', () => {
      let data = Enumerable
                      .from([1, 2, 3, 4, 5]);
      let result = data
                      .except(3)
                      .toArray();
      expect(result).toEqual([1, 2, 4, 5]);
      result = data
                  .except([3, 4])
                  .toArray();
      expect(result).toEqual([1, 2, 5]);
      result = data
                  .except(Enumerable.from([3, 4]))
                  .toArray();
      expect(result).toEqual([1, 2, 5]);
      result = data
                  .except()
                  .toArray();
      expect(result).toEqual([1, 2, 3, 4, 5]);
      data = Enumerable
                  .from(ownerArray);
      deepFreeze(data);
      result = data
                  .except([magnus])
                  .toArray();
      expect(result).toMatch([terry, charlotte]);
    });

    it('should perform union all', () => {
      let data = Enumerable
                      .from([5, 3, 9, 7, 5, 9, 3, 7]);
      let result = data
                      .unionAll([8, 3, 6, 4, 4, 9, 1, 0])
                      .toArray();
      expect(result).toEqual([5, 3, 9, 7, 5, 9, 3, 7, 8, 3, 6, 4, 4, 9, 1, 0]);
      result = data
                  .unionAll(Enumerable.from(1, 2, 5))
                  .toArray();
      expect(result).toEqual([5, 3, 9, 7, 5, 9, 3, 7, 1, 2, 5]);
      result = data
                  .unionAll(1)
                  .toArray();
      expect(result).toEqual([5, 3, 9, 7, 5, 9, 3, 7, 1]);
      result = data
                  .unionAll()
                  .toArray();
      expect(result).toEqual([5, 3, 9, 7, 5, 9, 3, 7]);
      const john = new Owner('John');
      data = Enumerable
                  .from(ownerArray);
      deepFreeze(data);
      deepFreeze(john);
      result = data
                  .unionAll([john])
                  .toArray();
      expect(result).toMatch([magnus, terry, charlotte, john]);
    });

    it('should perform union', () => {
      let data = Enumerable
                      .from([5, 3, 9, 7, 5, 9, 3, 7]);
      let result = data
                      .union([8, 3, 6, 4, 4, 9, 1, 0])
                      .toArray();
      expect(result).toEqual([5, 3, 9, 7, 8, 6, 4, 1, 0]);
      result = data
                  .union()
                  .toArray();
      expect(result).toEqual([5, 3, 9, 7]);
      const john = new Owner('John');
      data = Enumerable
                  .from(ownerArray);
      deepFreeze(data);
      deepFreeze(john);
      result = data
                  .union([john])
                  .toArray();
      expect(result).toMatch([magnus, terry, charlotte, john]);
    });

    it('should Intersect', () => {
      let data = Enumerable
                      .from([44, 26, 92, 30, 71, 38]);
      let result = data
                      .intersect([39, 59, 83, 47, 26, 4, 30])
                      .toArray();
      expect(result).toEqual([26, 30]);
      result = data
                  .intersect()
                  .toArray();
      expect(result).toEqual([]);
      result = Enumerable
              .from([1, 2, 3, 4, 5])
              .intersect(3)
              .toArray();
      expect(result).toEqual([3]);
      result = Enumerable
              .from([1, 2, 3, 4, 5])
              .intersect([3, 4, 6])
              .toArray();
      expect(result).toEqual([3, 4]);
      result = Enumerable
              .from([1, 2, 3, 4, 5])
              .intersect(Enumerable.from([2, 5, 7]))
              .toArray();
      expect(result).toEqual([2, 5]);
      data = Enumerable
                  .from(ownerArray);
      deepFreeze(data);
      result = data
                  .intersect([magnus])
                  .toArray();
      expect(result).toMatch([magnus]);
    });

    it('should join', () => {
      const data = Enumerable
                      .from(ownerArray);
      let result = data
                      .join(petArray,
                            person => person,
                            pet => pet.owner,
                            (person, pet) => ({
                              ownerName: person.name,
                              pet: pet.name,
                            }))
                      .toArray();
      expect(result).toMatch([{
        ownerName: 'Hedlund, Magnus',
        pet: 'Daisy',
      }, {
        ownerName: 'Adams, Terry',
        pet: 'Barley',
      }, {
        ownerName: 'Adams, Terry',
        pet: 'Boots',
      }, {
        ownerName: 'Weiss, Charlotte',
        pet: 'Whiskers',
      }]);
      result = data
                      .join(petArray,
                            person => person,
                            pet => pet.owner,
                            (person, pet) => ({
                              ownerName: person.name,
                              pet: pet.name,
                            }),
                            (person, owner) => (
                              person.name === owner.name && person.name === 'Adams, Terry'
                            ))
                      .toArray();
      expect(result).toEqual([{
        ownerName: 'Adams, Terry',
        pet: 'Barley',
      }, {
        ownerName: 'Adams, Terry',
        pet: 'Boots',
      }]);
    });

    it('should group join', () => {
      const data = Enumerable
                      .from(ownerArray);
      let result = data
                      .groupJoin(petArray,
                            person => person,
                            pet => pet.owner,
                            (person, pets) => ({
                              ownerName: person.name,
                              pets: pets.select(x => x.name).toArray(),
                            }))
                      .toArray();
      expect(result).toMatch([{
        ownerName: 'Hedlund, Magnus',
        pets: ['Daisy'],
      }, {
        ownerName: 'Adams, Terry',
        pets: ['Barley', 'Boots'],
      }, {
        ownerName: 'Weiss, Charlotte',
        pets: ['Whiskers'],
      }]);
      result = data
                  .groupJoin(petArray,
                        person => person,
                        pet => pet.owner,
                        (person, pets) => ({
                          ownerName: person.name,
                          pets: pets.select(x => x.name).toArray(),
                        }),
                        (person, owner) => (
                          person.name === owner.name && person.name === 'Adams, Terry'
                        ))
                  .toArray();
      expect(result).toEqual([{
        ownerName: 'Adams, Terry',
        pets: ['Barley', 'Boots'],
      }]);
    });

    it('should take single', () => {
      let result = peopleEnumerable
                      .single(x => x.name === 'Matteo');
      expect(result).toMatch(peopleArray[0]);
      result = peopleEnumerable
                      .single();
      expect(result).toMatch(peopleArray[0]);
    });

    it('should take first or default', () => {
      let result = Enumerable
                      .empty()
                      .firstOrDefault(-1);
      expect(result).toMatch(-1);
      result = peopleEnumerable
                    .firstOrDefault(-1);
      expect(result).toMatch(peopleArray[0]);
      result = Enumerable
                    .empty()
                    .firstOrDefault();
      expect(result).toMatch(undefined);
    });

    it('should take last or default', () => {
      let result = Enumerable
                      .empty()
                      .lastOrDefault(-1);
      expect(result).toMatch(-1);
      result = peopleEnumerable
                    .lastOrDefault(-1);
      expect(result).toMatch(peopleArray[2]);
      result = Enumerable
                    .empty()
                    .lastOrDefault();
      expect(result).toMatch(undefined);
    });

    it('should take single or default', () => {
      const defaultObj = { name: 'Foo' };
      let result = Enumerable
                      .empty()
                      .singleOrDefault(x => x.name === 'Foo', defaultObj);
      expect(result).toMatch(defaultObj);
      result = peopleEnumerable
                    .singleOrDefault(x => x.name === 'Matteo', defaultObj);
      expect(result).toMatch(peopleArray[0]);
    });

    it('should take', () => {
      let result = peopleEnumerable
                      .take(2)
                      .toArray();
      expect(result).toMatch(peopleArray.slice(0, 2));
      result = peopleEnumerable
                      .take()
                      .toArray();
      expect(result).toMatch(peopleArray);
    });

    it('should take last n', () => {
      let result = peopleEnumerable
                      .takeLast(2)
                      .toArray();
      expect(result).toMatch([peopleArray[1], peopleArray[2]]);
      result = peopleEnumerable
                      .takeLast()
                      .toArray();
      expect(result).toMatch([...peopleArray]);
    });

    it('should take while', () => {
      let result = Enumerable.from([1, 2, 3, 4, 5])
                      .takeWhile(x => x < 4)
                      .toArray();
      expect(result).toEqual([1, 2, 3]);
      result = Enumerable.from([1, 2, 3, 4, 5])
                      .takeWhile(() => false)
                      .toArray();
      expect(result).toEqual([]);
    });

    it('should take last while', () => {
      let result = Enumerable.from([1, 2, 3, 4, 5])
                      .takeLastWhile(x => x > 2)
                      .toArray();
      expect(result).toEqual([3, 4, 5]);
      result = Enumerable.from([1, 2, 3, 4, 5])
                      .takeWhile(() => false)
                      .toArray();
      expect(result).toEqual([]);
    });

    it('should skip', () => {
      let result = peopleEnumerable
                      .skip(2)
                      .toArray();
      expect(result).toMatch(peopleArray.slice(2, 3));
      result = peopleEnumerable
                      .skip()
                      .toArray();
      expect(result).toMatch(peopleArray);
    });

    it('should skip last n', () => {
      let result = peopleEnumerable
                      .skipLast(2)
                      .toArray();
      expect(result).toMatch([peopleArray[0]]);
      result = peopleEnumerable
                      .skipLast()
                      .toArray();
      expect(result).toMatch([...peopleArray]);
    });

    it('should skip while', () => {
      let result = Enumerable.from([1, 2, 3, 4, 5])
                      .skipWhile(x => x < 4)
                      .toArray();
      expect(result).toEqual([4, 5]);
      result = Enumerable.from([1, 2, 3, 4, 5])
                      .skipWhile(() => true)
                      .toArray();
      expect(result).toEqual([]);
    });

    it('should skip last while', () => {
      let result = Enumerable.from([1, 2, 3, 4, 5])
                      .skipLastWhile(x => x > 2)
                      .toArray();
      expect(result).toEqual([1, 2]);
      result = Enumerable.from([1, 2, 3, 4, 5])
                      .skipLastWhile(() => true)
                      .toArray();
      expect(result).toEqual([]);
    });

    it('should group by', () => {
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
      deepFreeze(animalArray);

      const animalEnumerable = Enumerable
                                    .from(animalArray);
      deepFreeze(animalEnumerable);

      let result = animalEnumerable
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
      expect(result).toMatch([{
        key: 8,
        count: 1,
        sum: 6,
        items: ['Barley'],
      }, {
        key: 4,
        count: 2,
        sum: 10,
        items: ['Boots', 'Daisy'],
      }, {
        key: 1,
        count: 1,
        sum: 8,
        items: ['Whiskers'],
      }]);
      result = animalEnumerable
                        .groupBy(x => x.age)
                        .toArray();
      expect(result).toMatch([{
        key: 8,
        items: [animalArray[0]],
      }, {
        key: 4,
        items: [animalArray[1], animalArray[3]],
      }, {
        key: 1,
        items: [animalArray[2]],
      }]);
      result = animalEnumerable
                        .groupBy()
                        .toArray();
      expect(result).toMatch([{
        key: 0,
        items: [animalArray[0]],
      }, {
        key: 1,
        items: [animalArray[1]],
      }, {
        key: 2,
        items: [animalArray[2]],
      }, {
        key: 3,
        items: [animalArray[3]],
      }]);
    });
  });

  describe('Array like', () => {
    it('should find index', () => {
      let result = peopleEnumerable
                      .findIndex(x => x.name === 'Matteo');
      expect(result).toEqual(0);
      result = peopleEnumerable
                      .findIndex();
      expect(result).toEqual(0);
    });

    it('should get element index', () => {
      const data = Enumerable
                        .from([1, 2, 3, 4, 2]);
      let result = data
                      .indexOf(3);
      expect(result).toEqual(2);
      result = data
                  .indexOf(5);
      expect(result).toEqual(-1);
      result = data
                  .indexOf(2, 2);
      expect(result).toEqual(4);
    });

    it('should push', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .push(4)
                      .toArray();
      expect(result).toEqual([1, 2, 3, 4]);
      result = Enumerable
                      .from([1, 2, 3])
                      .push(4, 5)
                      .toArray();
      expect(result).toEqual([1, 2, 3, 4, 5]);
      result = Enumerable
                      .from([1, 2, 3])
                      .push()
                      .toArray();
      expect(result).toEqual([1, 2, 3]);
    });

    it('should pop', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .pop()
                      .toArray();
      expect(result).toEqual([1, 2]);
      let i = 0;
      result = Enumerable
                      .from([1, 2, 3])
                      .pop(x => {
                        i += x;
                      })
                      .toArray();
      expect(result).toEqual([1, 2]);
      expect(i).toEqual(3);
    });

    it('should shift', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .shift()
                      .toArray();
      expect(result).toEqual([2, 3]);
      let i = 0;
      result = Enumerable
                      .from([1, 2, 3])
                      .shift(x => {
                        i += x;
                      })
                      .toArray();
      expect(result).toEqual([2, 3]);
      expect(i).toEqual(1);
    });

    it('should unshift', () => {
      const data = Enumerable
                      .from([1, 2, 3]);
      let result = data
                      .unshift(4)
                      .toArray();
      expect(result).toEqual([4, 1, 2, 3]);
      result = data
                  .unshift(4, 5)
                  .toArray();
      expect(result).toEqual([4, 5, 1, 2, 3]);
      result = data
                  .unshift()
                  .toArray();
      expect(result).toEqual([1, 2, 3]);
    });

    it('should get entries', () => {
      const result = Enumerable
                        .from(['a', 'b', 'c'])
                        .entries();

      expect(result.next().value).toEqual([0, 'a']);
      expect(result.next().value).toEqual([1, 'b']);
      expect(result.next().value).toEqual([2, 'c']);
    });

    it('should filter', () => {
      const data = Enumerable.from([1, '32', {}, new Person(), 3, '43']);
      deepFreeze(data);
      const result = data
                      .filter(x => Number(x) < 40)
                      .toArray();
      expect(result).toEqual([1, '32', 3]);
    });

    it('should sort', () => {
      let result = Enumerable
                      .from([3, 1, 2])
                      .sort()
                      .toArray();
      expect(result).toEqual([1, 2, 3]);
      result = Enumerable
                      .from([3, 1, 2])
                      .sort((x, y) => {
                        let order = 0;
                        if (x > y) {
                          order = -1;
                        } else if (x < y) {
                          order = 1;
                        }
                        return order;
                      })
                      .toArray();
      expect(result).toEqual([3, 2, 1]);
    });

    it('should reverse', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .reverse()
                      .toArray();
      expect(result).toEqual([3, 2, 1]);
      result = Enumerable
                      .empty()
                      .reverse()
                      .toArray();
      expect(result).toEqual([]);
    });

    it('should map', () => {
      const result = Enumerable
                      .from([1, 2, 3])
                      .map(x => x + 1)
                      .toArray();
      expect(result).toEqual([2, 3, 4]);
    });

    it('should slice', () => {
      const result = Enumerable
                      .from([1, 2, 3])
                      .slice(0, 1)
                      .toArray();
      expect(result).toEqual([1]);
    });

    it('should copy within', () => {
      const data = Enumerable
                      .from([1, 2, 3, 4, 5]);
      let result = data
                      .copyWithin(-2)
                      .toArray();
      expect(result).toEqual([1, 2, 3, 1, 2]);
      result = data
                  .copyWithin(0, 3)
                  .toArray();
      expect(result).toEqual([4, 5, 3, 4, 5]);
      result = data
                  .copyWithin(0, 3, 4)
                  .toArray();
      expect(result).toEqual([4, 2, 3, 4, 5]);
    });

    it('should fill', () => {
      const data = Enumerable
                      .from([1, 2, 3]);
      let result = data
                      .fill(4)
                      .toArray();
      expect(result).toEqual([4, 4, 4]);
      result = data
                  .fill(4, 1)
                  .toArray();
      expect(result).toEqual([1, 4, 4]);
      result = data
                  .fill(4, 1, 2)
                  .toArray();
      expect(result).toEqual([1, 4, 3]);
    });

    it('should iterate', () => {
      let i = 0;
      peopleEnumerable
        .forEach(x => {
          i += x.age;
        });
      expect(i).toEqual(59);
    });

    it('should splice', () => {
      let result = Enumerable
                      .from(['angel', 'clown', 'mandarin', 'surgeon'])
                      .splice(2, 0)
                      .toArray();
      expect(result).toEqual([]);
      result = Enumerable
                      .from(['angel', 'clown', 'drum', 'mandarin', 'surgeon'])
                      .splice(3, 1)
                      .toArray();
      expect(result).toEqual(['mandarin']);
    });

    it('should concat', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .concat([4, 5, 6])
                      .toArray();
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
      result = Enumerable
                      .from([1, 2, 3])
                      .concat()
                      .toArray();
      expect(result).toEqual([1, 2, 3]);
      result = Enumerable
                      .from([1, 2, 3])
                      .concat(4)
                      .toArray();
      expect(result).toEqual([1, 2, 3, 4]);
      result = Enumerable
                      .from([1, 2, 3])
                      .concat(Enumerable.from([4]))
                      .toArray();
      expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should get keys', () => {
      const result = Enumerable
                      .from([1, 2, 3])
                      .keys()
                      .toArray();
      expect(result).toEqual([0, 1, 2]);
    });

    it('should includes', () => {
      const data = Enumerable
                      .from([1, 2, 3]);
      let result = data
                      .includes(2);
      expect(result).toBeTruthy();
      result = data
                  .includes(5);
      expect(result).toBeFalsy();
    });

    it('should get last index of', () => {
      const data = Enumerable
                      .from([2, 5, 9, 2]);
      let result = data
                      .lastIndexOf(2);
      expect(result).toEqual(3);
      result = data
                  .lastIndexOf(7);
      expect(result).toEqual(-1);
      result = data
                  .lastIndexOf(2, 3);
      expect(result).toEqual(0);
    });
  });

  describe('Others', () => {
    it('should add default if empty', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .defaultIfEmpty(1)
                      .toArray();
      expect(result).toEqual([1, 2, 3]);
      result = Enumerable
                      .empty()
                      .defaultIfEmpty(1)
                      .toArray();
      expect(result).toEqual([1]);
      result = Enumerable
                      .empty()
                      .defaultIfEmpty(1, 2, 3)
                      .toArray();
      expect(result).toEqual([1, 2, 3]);
    });

    it('should release', () => {
      const sum = (...params) => params.reduce((a, b) => a + b);
      const data = Enumerable
                      .from([2, 5, 9, 2]);
      expect(data.release).toNotThrow();
      const result = data
                 .release(sum);
      expect(result).toEqual(18);
    });

    it('should determine equality', () => {
      let result = Enumerable
                      .empty()
                      .equals();
      expect(result).toBeTruthy();
      result = Enumerable
                  .from([1, 2, 3])
                  .equals([1, 2, 3]);
      expect(result).toBeTruthy();
      result = Enumerable
                  .from([1, 2, 3])
                  .equals(null);
      expect(result).toBeFalsy();
      result = Enumerable
                  .from([[1, 2], 3, 4, [5, 6]])
                  .equals(Enumerable.from([[1, 2], 3, 4, [5, 6]]));
      expect(result).toBeTruthy();
      result = Enumerable
                  .from([[1, 2], 3, 4, [5, 6]])
                  .equals([[1, 3], 5, 4, [5, 7]]);
      expect(result).toBeFalsy();
      result = Enumerable
                  .from([1, 2, 3])
                  .equals([4, 2, 3]);
      expect(result).toBeFalsy();
    });

    it('should determine if all values are equal', () => {
      const data = [
        { x: 2, y: 5 },
        { x: 2, y: 7 },
        { x: 2, y: 2 },
        { x: 2, y: 1 },
      ];
      deepFreeze(data);
      let result = Enumerable
                      .repeat(1, 3)
                      .allValuesSame();
      expect(result).toBeTruthy();
      result = Enumerable
                      .range(1, 3)
                      .allValuesSame();
      expect(result).toBeFalsy();
      result = Enumerable
                      .empty()
                      .allValuesSame();
      expect(result).toBeTruthy();
      result = Enumerable
                      .from(data)
                      .allValuesSame(point => point.x);
      expect(result).toBeTruthy();
    });

    it('should determine if all values are equal to the given', () => {
      let result = Enumerable
                      .empty()
                      .allEqualTo(1);
      expect(result).toBeFalsy();
      result = Enumerable
                      .from([1, 2, 3])
                      .allEqualTo(1);
      expect(result).toBeFalsy();
      result = Enumerable
                      .from([1, 1, 1])
                      .allEqualTo(1);
      expect(result).toBeTruthy();
    });

    it('should compare', () => {
      let result = Enumerable
                      .from([2, 1, 3]);
      expect(result.compare).toThrow();
      result = Enumerable
                      .from([2, 1, 3, 4, -2])
                      .compare((a, b) => a > b);
      expect(result).toEqual(4);
      result = Enumerable
                      .empty()
                      .compare((a, b) => a > b);
      expect(result).toEqual(undefined);
      result = Enumerable
                      .from([2])
                      .compare((a, b) => a > b);
      expect(result).toEqual(2);
    });

    it('should indicate if is empty', () => {
      let result = Enumerable
                      .from([2, 1, 3])
                      .isEmpty();
      expect(result).toBeFalsy();
      result = Enumerable
                      .from()
                      .isEmpty();
      expect(result).toBeTruthy();
    });

    it('should shuffle', () => {
      let result = Enumerable
                      .empty()
                      .shuffle()
                      .toArray();
      const data = Enumerable
                      .range(0, 100)
                      .toArray();
      expect(result).toEqual([]);
      result = Enumerable
                      .from(data)
                      .shuffle()
                      .toArray();
      expect(result.length).toEqual(101);
      expect(result).toNotEqual(data);
    });

    it('should evaluate all', () => {
      const data = Enumerable
                      .from([2, 1, 3]);
      let result = data
                      .all(x => x < 4);
      expect(result).toBeTruthy();
      result = data
                  .all(x => x < 3);
      expect(result).toBeFalsy();
      result = data
                  .all();
      expect(result).toBeTruthy();
    });

    it('should evaluate any', () => {
      const data = Enumerable
                      .from([2, 1, 3]);
      let result = data
                      .any(x => x < 2);
      expect(result).toBeTruthy();
      result = data
                  .any(x => x < 0);
      expect(result).toBeFalsy();
      result = data
                  .any();
      expect(result).toBeTruthy();
    });

    it('should evaluate entire', () => {
      const data = Enumerable
                      .from([2, 1, 3]);
      let result = data
                      .entire();
      expect(result).toBeTruthy();
      result = data
                  .entire(x => x.length === 3);
      expect(result).toBeTruthy();
      result = data
                  .entire(x => x.indexOf(4) !== -1);
      expect(result).toBeFalsy();
    });

    it('should sum', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .sum();
      expect(result).toEqual(6);
      result = peopleEnumerable
                      .sum(x => x.age);
      expect(result).toEqual(59);
      result = Enumerable
                      .empty()
                      .sum();
      expect(result).toEqual(0);
    });

    it('should multiply', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .multiply();
      expect(result).toEqual(6);
      result = peopleEnumerable
                      .multiply(x => x.age);
      expect(result).toEqual(7581);
      result = Enumerable
                      .empty()
                      .multiply();
      expect(result).toEqual(1);
    });

    it('should get avg', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .avg();
      expect(result).toEqual(2);
      result = peopleEnumerable
                      .avg(x => x.age);
      expect(result.toFixed(2)).toEqual(19.67);
    });

    it('should get max', () => {
      let result = Enumerable
                      .from([2, 1, 3])
                      .max();
      expect(result).toEqual(3);
      result = peopleEnumerable
                      .max(x => x.age);
      expect(result).toMatch(peopleArray[1]);
    });

    it('should get min', () => {
      let result = Enumerable
                      .from([2, 1, 3])
                      .min();
      expect(result).toEqual(1);
      result = peopleEnumerable
                      .min(x => x.age);
      expect(result).toMatch(peopleArray[0]);
    });

    it('should count with contains', () => {
      let result = Enumerable
                      .from([1, 2, 3])
                      .contains();
      expect(result).toEqual(0);
      result = Enumerable
                      .from([1, 2, 3, 1, 2, 1, 4])
                      .contains(1);
      expect(result).toEqual(3);
      result = Enumerable
                      .from([1, 2, 3, 1, 2, 1, 4])
                      .contains(5);
      expect(result).toEqual(0);
    });

    it('should flatten', () => {
      const result = Enumerable
                      .from([1, 2, [3, 4], [5]])
                      .flatten()
                      .toArray();
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should clean', () => {
      const result = Enumerable
                      .from([1, 2, null, 3, 4, undefined, 5])
                      .clean()
                      .toArray();
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should remove', () => {
      const result = Enumerable
                      .from([1, 2, null, 3, 4, undefined, 5])
                      .remove(3, 4)
                      .toArray();
      expect(result).toEqual([1, 2, null, undefined, 5]);
    });

    it('should filter by string Type', () => {
      const data = Enumerable.from([1, '32', {}, new Person(), 3, '43']);
      deepFreeze(data);
      let result = data
                      .ofType('string')
                      .toArray();
      expect(result).toEqual(['32', '43']);
      result = Enumerable
                .from([1, 2, undefined, 3, 4])
                .ofType()
                .toArray();
      expect(result).toEqual([undefined]);
      result = data
                      .ofType(Person)
                      .toArray();
      expect(result).toMatch([new Person()]);
    });
  });
});
