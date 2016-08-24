import 'core-js/fn/array/from';
import 'core-js/fn/array/copy-within';
import 'core-js/fn/array/entries';
import 'core-js/fn/array/fill';
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';
import 'core-js/fn/array/includes';
import 'core-js/fn/array/keys';
import 'core-js/fn/symbol/iterator';
import 'core-js/fn/map';
import 'core-js/fn/set';
import {
  identityFunction,
  getIndex,
  trueFunction,
  falseFunction,
  comparerFunction,
  noop,
  isNullOrUndefined,
  deepCopy,
  shuffle,
  orderByProps,
  compareArrays,
} from './utils';

class Enumerable {

  // Creational

  static from = (...params) => new Enumerable(...params);

  static empty = () => new Enumerable();

  static range = (from, to, step = 1) => {
    const source = [];
    let start = from;
    let end = to;
    if (end === undefined) {
      end = start;
      start = 0;
    }
    let condition;
    if (step > 0) {
      condition = (x) => x <= end;
    } else {
      condition = (x) => x >= end;
    }
    for (let i = start; condition(i); i += step) {
      source.push(i);
    }
    return new Enumerable(source);
  }

  static repeat = (...params) => {
    const times = params.pop();
    const array = [];
    for (let i = 0; i < times; i++) {
      array.push(...params);
    }
    return new Enumerable(array);
  }

  static getWhile = (func = falseFunction, getValue) => {
    const result = [];
    while (func()) {
      result.push(getValue());
    }
    return new Enumerable(result);
  }

  constructor(source = [], ...params) {
    if (params.length === 0) {
      this.array = this.getArrayFrom(source);
    } else {
      this.array = [...this.getArrayFrom(source), ...deepCopy(params)];
    }

    this.delete = this.remove;
  }

  // Array like

  find = this.single;

  findIndex = (func = trueFunction) => this.array.indexOf(this.array.find(func));

  map = (...params) => new Enumerable(deepCopy(this.array).map(...params));

  forEach = (...params) => {
    deepCopy(this.array).forEach(...params);
    return this;
  };

  slice = (...params) => new Enumerable([...this.array].slice(...params));

  splice = (...params) => new Enumerable([...this.array].splice(...params));

  filter = (...params) => new Enumerable(this.array.filter(...params));

  reverse = () => new Enumerable([...this.array].reverse());

  sort = (...params) => {
    const newArray = deepCopy(this.array);
    newArray.sort(...params);
    return new Enumerable(newArray);
  };

  entries = () => this.array.entries();

  reduce = (...params) => {
    let result;
    if (!(this.isEmpty() && params.length < 2)) {
      result = deepCopy(this.array.reduce(...params));
    }
    return result;
  }

  reduceRight = (...params) => {
    let result;
    if (!(this.isEmpty() && params.length < 2)) {
      result = deepCopy(this.array.reduceRight(...params));
    }
    return result;
  }

  includes = (item) => this.contains(item) > 0;

  push = (...params) => new Enumerable([...this.array, ...params]);

  every = this.all;

  some = this.any;

  keys = () => new Enumerable([...this.array.keys()]);

  indexOf = (item, start = 0) => {
    let i = start;
    while (i < this.array.length) {
      if (comparerFunction(this.array[i], item)) {
        return i;
      }
      i++;
    }
    return -1;
  }

  lastIndexOf = (item, end = this.array.length) => {
    let i = 0;
    let index = -1;
    while (i < end) {
      if (comparerFunction(this.array[i], item)) {
        index = i;
      }
      i++;
    }
    return index;
  };

  concat = (collection = []) => new Enumerable([...this.array, ...this.getArrayFrom(collection)]);

  unshift = (...params) => new Enumerable([...params, ...this.array]);

  copyWithin = (...params) => new Enumerable([...this.array].copyWithin(...params));

  callOnArray = (func, callback = noop) => {
    const newArray = deepCopy(this.array);
    callback(newArray[func]());
    return new Enumerable(newArray);
  }

  pop = this.callOnArray.bind(this, 'pop');

  shift = this.callOnArray.bind(this, 'shift');

  fill = (...params) => new Enumerable(deepCopy(this.array).fill(...params));

  // Sql like

  elementAt = (index) => deepCopy(this.array[index]);

  elementAtOrDefault = (index, defaultObj) => {
    let result = defaultObj;
    if (!isNullOrUndefined(this.array[index])) {
      result = this.array[index];
    }
    return deepCopy(result);
  };

  where = this.filter;
  having = this.filter;

  select = (func = identityFunction) => this.map(func);

  selectMany = (func = identityFunction) => this.map(func).flatten();

  distinct = () => this.filter((item, index) => this.array.indexOf(item) === index);

  count = (func = trueFunction) =>
        this.reduce((previous, current) => {
          let result = previous;
          if (func(current)) {
            result++;
          }
          return result;
        }, 0);

  update = (func) => this.map((x) => {
    const value = deepCopy(x);
    const returnedValue = func(value);
    return returnedValue || value;
  });

  except = (collection = []) => {
    const array = this.getArrayFrom(collection);
    return this.filter(x => array.indexOf(x) < 0);
  }

  unionAll = this.concat;

  union = (collection = []) => this.unionAll(collection).distinct();

  intersect = (collection = []) => {
    const array = this.getArrayFrom(collection);
    return this.filter(x => array.indexOf(x) !== -1);
  }

  join = (collection, getFirstKey, getSecondKey, getNewObj, comparer = comparerFunction) => {
    const result = [];
    const arrayToJoin = this.getArrayFrom(collection);
    deepCopy(this.array).forEach((first) => {
      arrayToJoin.forEach((second) => {
        if (comparer(getFirstKey(first), getSecondKey(second))) {
          result.push(getNewObj(first, second));
        }
      });
    });
    return new Enumerable(result);
  }

  groupJoin = (collection, getFirstKey, getSecondKey, getNewObj, comparer = comparerFunction) => {
    const result = [];
    const arrayToJoin = this.getArrayFrom(collection);
    deepCopy(this.array).forEach((first) => {
      const secondCollection = [];
      arrayToJoin.forEach((second) => {
        if (comparer(getFirstKey(first), getSecondKey(second))) {
          secondCollection.push(second);
        }
      });
      if (secondCollection.length !== 0) {
        result.push(getNewObj(first, new Enumerable(secondCollection)));
      }
    });
    return new Enumerable(result);
  }

  groupBy = (
    keySelector = getIndex,
    elementSelector = identityFunction,
    resultSelector = (key, items) => ({ key, items: items.toArray() }),
    comparer = comparerFunction
  ) => {
    let keys = deepCopy(this.array).map((...params) => ({
      key: keySelector(...params),
      element: elementSelector(...params),
    }));
    const result = [];
    while (keys.length !== 0) {
      // eslint-disable-next-line
      const toRemove = keys.filter((item) =>
        comparer(item.key, keys[0].key)
      );
      result.push(
        resultSelector(keys[0].key, new Enumerable(toRemove.map(x => x.element)))
      );
      keys = keys.filter((el) =>
        toRemove.indexOf(el) < 0
      );
    }
    return new Enumerable(result);
  }

  orderBy = (...selectors) => new Enumerable(
    orderByProps(this.array, false, ...selectors)
  );

  orderByAscending = this.orderBy;
  orderByDescending = (...selectors) => new Enumerable(
    orderByProps(this.array, true, ...selectors)
  );

  first = this.elementAt.bind(this, 0);

  firstOrDefault = this.elementAtOrDefault.bind(this, 0);

  last = () => this.elementAt(this.array.length - 1);

  lastOrDefault = (defaultObj) => this.elementAtOrDefault(this.array.length - 1, defaultObj);

  skip = (start = 0) => this.slice(start);

  skipLast = (start = 0) => this.reverse().skip(start).reverse();

  take = (number = this.array.length) => this.slice(0, number);

  takeLast = (number = this.array.length) => this.reverse().take(number).reverse();

  doWhile = (func, predicate) => {
    let i = 0;
    while (i < this.array.length && predicate(this.array[i])) {
      i++;
    }
    return this[func](i);
  }

  takeWhile = this.doWhile.bind(this, 'take');
  skipWhile = this.doWhile.bind(this, 'skip');
  takeLastWhile = (predicate) => this.reverse().doWhile('take', predicate).reverse();
  skipLastWhile = (predicate) => this.reverse().doWhile('skip', predicate).reverse();

  single = (func = trueFunction) => deepCopy(this.array.find(func));

  singleOrDefault = (func, defaultObj) => {
    let result = defaultObj;
    const found = this.array.find(func);
    if (found) {
      result = found;
    }
    return deepCopy(result);
  }

  aggregate = this.reduce;

  aggregateRight = this.reduceRight;

  insert = this.push;

  // Converters

  toIterator = () => this.toArray()[Symbol.iterator]();

  toArray = () => deepCopy(this.array);
  toList = this.toArray;

  toJSON = () => JSON.stringify(this.toArray());

  toString = (...params) => this.array.join(...params);

  toLocaleString = () => this.array.toLocaleString();

  toDictionary = (getKey = getIndex, getValue = identityFunction) => {
    const result = {};
    this.array.forEach((...params) => {
      result[getKey(...params)] = deepCopy(getValue(...params));
    });
    return result;
  }

  releaseToType = (Type = Array) => new Type(...deepCopy(this.array));
  releaseToFormat = this.releaseToType;

  toType = (Type = Array) => {
    const newArray = deepCopy(this.array);
    return Type === Array ? newArray : new Type(newArray);
  };
  toFormat = this.toType;

  toMap = (getKey = getIndex, getValue = identityFunction) => {
    const map = new Map();
    this.array.forEach((...params) => {
      map.set(getKey(...params), getValue(...params));
    });
    return map;
  }

  toSet = () => new Set(deepCopy(this.array));

  toObject = () => this.toDictionary();

  // Others

  convert = this.cast;

  flatten = () => new Enumerable(this.reduce((a, b) => a.concat(b), []));
  concatAll = this.flatten;

  contains = (item) => this.count((current) => comparerFunction(current, item));

  sum = (func = identityFunction) =>
        this.reduce((previous, current) => previous + func(current), 0);

  multiply = (func = identityFunction) =>
        this.reduce((previous, current) => previous * func(current), 1);
  product = this.multiply;

  avg = (func = identityFunction) =>
        this.reduce((previous, current) => previous + func(current), 0) / this.count();
  average = this.avg;

  max = (func = identityFunction) =>
        this.compare((previous, current) => func(previous) >= func(current));
  min = (func = identityFunction) =>
        this.compare((previous, current) => func(previous) <= func(current));

  isEmpty = () => this.array.length === 0;

  defaultIfEmpty = (...items) => new Enumerable(this.isEmpty() ? [...items] : this.array);

  enqueue = this.push;

  dequeue = this.shift;

  shuffle = () => new Enumerable(shuffle(this.array));

  all = (func = trueFunction) => this.array.every(func);

  any = (func = trueFunction) => this.array.some(func);

  entire = (func = trueFunction) => func(deepCopy(this.array));

  release = (func = noop) => func(...deepCopy(this.array));

  cast = (construct) => this.map(construct);

  getArrayFrom(source) {
    let array;
    if (source instanceof Enumerable) {
      array = source.toArray();
    } else if (!isNullOrUndefined(source) && typeof source[Symbol.iterator] === 'function') {
      array = [...source];
    } else {
      array = [source];
    }
    return array;
  }

  remove = (...items) => this.filter((x) => {
    let valid = true;
    let i = 0;
    while (valid && i < items.length) {
      valid = valid && !comparerFunction(x, items[i]);
      i++;
    }
    return valid;
  });

  clean = this.remove.bind(this, undefined, null);

  ofType = (type = 'undefined') => {
    let func;
    if (typeof type === 'string') {
      func = (x) => typeof x === type;
    } else {
      func = (x) => x instanceof type;
    }
    return this.filter(func);
  }

  compare = (compareFn) => this.reduce((previous, current) => {
    let result;
    if (!compareFn) {
      throw new Error('Invalid compare function');
    }
    if (compareFn(previous, current)) {
      result = previous;
    } else {
      result = current;
    }
    return result;
  });

  top = this.take;

  equals = (collection = []) => compareArrays(this.array, this.getArrayFrom(collection));
  sequenceEqual = this.equal;

  allValuesSame = (func = identityFunction) => {
    let same = true;
    if (this.array.length >= 1) {
      same = !!this.array.reduce((a, b) => {
        let result = NaN;
        if (comparerFunction(func(a), func(b))) {
          result = a;
        }
        return result;
      });
    }
    return same;
  }

  allEqualTo = (value) => {
    let same = false;
    if (this.array.length !== 0) {
      same = new Enumerable([value, ...this.array]).allValuesSame();
    }
    return same;
  }
}

Enumerable.while = Enumerable.getWhile;

export default Enumerable;
