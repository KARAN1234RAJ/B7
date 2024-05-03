function mapArray(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = mapArray(numbers, (number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
