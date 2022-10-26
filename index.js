const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = (a, b) => {
  return a + b;
};

const product = (a, b) => {
  return a * b;
};

const min = (a, b) => {
  return a <= b ? a : b;
};

const max = (a, b) => {
  return a >= b ? a : b;
};

const myReducer = (f, xs) => xs.reduce(f);

console.log("sum", myReducer(sum, myArray));
console.log("product", myReducer(product, myArray));
console.log("min", myReducer(min, myArray));
console.log("max", myReducer(max, myArray));

// Currying and partial application
const myCurriedReducer = (f) => (xs) => xs.reduce(f);

const mySum = myCurriedReducer(sum);
const myProduct = myCurriedReducer(product);
const myMin = myCurriedReducer(min);
const myMax = myCurriedReducer(max);

console.log("curried sum", mySum(myArray));
console.log("curried product", myProduct(myArray));
console.log("curried min", myMin(myArray));
console.log("curried max", myMax(myArray));

// if I have to give both argument, I need to supply them seperately
console.log("2x curried sum", myCurriedReducer(sum)(myArray));
console.log("2x curried product", myCurriedReducer(product)(myArray));
console.log("2x curried min", myCurriedReducer(min)(myArray));
console.log("2x curried max", myCurriedReducer(max)(myArray));

