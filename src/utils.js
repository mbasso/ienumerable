export const identityFunction = (x) => x;
export const getIndex = (x, i) => i;
export const trueFunction = () => true;
export const falseFunction = () => false;
export const noop = () => {};
export const isNullOrUndefined = (item) => typeof item === 'undefined' || item == null;
export const comparerFunction = (x, y) => {
  let result;
  if (x == null && y == null
      || typeof x === 'undefined' && typeof y === 'undefined') {
    result = true;
  } else {
    result = JSON.stringify(x) === JSON.stringify(y);
  }
  return result;
};

export const deepCopy = (item) => {
  let result = item;
  if (Array.isArray(result)) {
    result = result.map(deepCopy);
  } else if (result && typeof result !== 'function' && result instanceof Object) {
    result = Object.assign({}, result);
    Object.keys(result).forEach((key) => {
      result[key] = deepCopy(result[key]);
    });
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
