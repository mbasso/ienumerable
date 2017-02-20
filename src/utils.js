import equal from 'deep-equal';
import _ from 'lodash/lang';

export const identityFunction = (x) => x;
export const getIndex = (x, i) => i;
export const trueFunction = () => true;
export const falseFunction = () => false;
export const noop = () => {};
export const isNullOrUndefined = (item) => item === undefined || item == null;
export const comparerFunction = (x, y) => equal(x, y, { strict: true });

const isSerializable = (obj) => {
  if (_.isNull(obj) ||
      _.isBoolean(obj) ||
      _.isNumber(obj) ||
      _.isString(obj)) {
    return true;
  } else if (!_.isPlainObject(obj) &&
      !_.isArray(obj)) {
    return false;
  // eslint-disable-next-line
  } else {
    // eslint-disable-next-line
    for (let key in obj) {
      if (!isSerializable(obj[key])) {
        return false;
      }
    }
  }
  return true;
};

export const deepCopy = (item) => {
  let result = item;
  if (isSerializable(item)) {
    result = JSON.parse(JSON.stringify(item));
  }
  return result;
};


export const shuffle = (array) => {
  const newArray = [...array];
  for (let x, j, i = newArray.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = newArray[i - 1];
    newArray[i - 1] = newArray[j];
    newArray[j] = x;
  }
  return newArray;
};

const order = (array, descending, func = identityFunction) =>
  array.sort((a, b) => {
    const first = func(a);
    const second = func(b);
    let result = 0;
    if (first < second) {
      result = descending ? 1 : -1;
    }
    if (first > second) {
      result = descending ? -1 : 1;
    }
    return result;
  });

export const orderByProps = (array, descending, ...selectors) => {
  let newArray = [...array];
  if (selectors.length === 0) {
    newArray = order(newArray, descending);
  } else {
    selectors.reverse();
    selectors.forEach((selector) => {
      newArray = order(newArray, descending, selector);
    });
  }
  return newArray;
};

export const compareArrays = (array, array2) => {
  let result = true;
  if (!isNullOrUndefined(array)
      && !isNullOrUndefined(array2)
      && array.length === array2.length) {
    for (let i = 0, l = array.length; i < l; i++) {
      if (array[i] instanceof Array
          && array2[i] instanceof Array) {
        if (!compareArrays(array[i], array2[i])) {
          result = false;
          break;
        }
      } else if (!comparerFunction(array[i], array2[i])) {
        result = false;
        break;
      }
    }
  } else {
    result = false;
  }
  return result;
};
