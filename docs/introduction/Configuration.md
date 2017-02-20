# Configuration

As we said before IEnumerable is a configurable library that allows you to work or not with immutability and advanced object comparison.
By default these features are enabled, but you can disable them as follow:

```js
// here Enumerable is deep immutable and uses the advanced comparison algorithm
Enumerable.deepImmutable = false;
// Enumerable only uses the advanced comparison algorithm
Enumerable.deepComparison = false;
// here Enumerable works only with references, using === to compare object

// do some stuff
Enumerable.from(...)
					.select(...)
					.toArray()

// here we can re-enable configs if needed
Enumerable.deepImmutable = true;
Enumerable.deepComparison = true;
```

Please note that you can enable and disable these features when you want based on your needs.
For example, without immutability you can update objects by reference:

```js
Enumerable.deepImmutable = false;

const data = [
	{ foo: 'bar' },
	{ foo: 'baz' },
];

Enumerable.from(data)
					.where(x => x.foo !== 'bar')
					.update(x => {
						x.foo = 'bar';
					});

// data is now modified:
// data = [
// 	{ foo: 'bar' },
// 	{ foo: 'bar' },
// ]
```

Please note also that **immutability works only with serializable objects**, so it won't work with functions for example.