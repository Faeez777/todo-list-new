// const nums = [1, 2, 3, 5];

// // make the last element 99
// nums[nums.length - 1] = 99;
// console.log(nums);

// function getLastValue(arr) {
//   const lastIndex = arr.length - 1;
//   return arr[lastIndex];
// }
// console.log(getLastValue("22 ,'33' ,'45"));
// console.log(getLastValue(["hello", "world"]));

// function arraySwap(array) {
//   const tempArray = array[0];
//   const tempValue = array[array.length - 1];
//   array[0] = tempValue;
//   array[array.length - 1] = tempArray;
//   return array;
// }
// console.log(arraySwap(["hello", "world", "food", "bar"])); // ['bar', 'world', 'foo', 'hello']
// console.log(arraySwap([1, 2, 3, 4, 5])); // [5, 2, 3, 4, 1]

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// function countDownFromFive() {
//   for (let i = 5; i >= 0; i--) {
//     console.log(i);
//   }
// }
// countDownFromFive();
// let u = 0;
// while (u <= 10) {
//   console.log(u);
//   u += 2;
// }
// let i = 5;
// while (i >= 0) {
//   console.log(i);
//   i -= 1;
// }
// function addOne(array, add) {
//   const array1 = array;
//   let array2 = [];

//   for (let i = 0; i < array1.length; i++) {
//     array2[i] = array1[i] + add;
//   }
//   console.log(array2);
// }
// addOne([-1, 2, -5, -0, -7], 2);

// const array = [1, 2, 3];
// const result = [];

// for (let i = 0; i < array.length; i++) {
//   result.push(array[i] + 1);
// }

// console.log(result);

// function addArrays(array1, array2) {
//   const result1 = array1;
//   for (let i = 0; i < result1.length; i++) {
//     result1[i] += array2[i];
//   }
//   return result1;
// }
// console.log(addArrays([1, 2, 3], [4, 5, 6])); // [5, 7, 9]

// function countPositiveNumbers(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countPositiveNumbers([-1, 2, -5, 3, -7])); // 2

// function minMax(array) {
//   if (array.length === 0) {
//     return { min: null, max: null }; // Nulls to handle empty array case\
//   }
//   let min = array[0];
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return { min, max };
// }
// console.log(minMax([456, 457, 458])); // { min: -5, max: 7 }

// function countWords(array) {
//   let wordCount = {};
//   for (let i = 0; i < array.length; i++) {
//     const word = array[i];
//     if (typeof word === "string") {
//       if (wordCount[word] === undefined) {
//         wordCount[word] = 1;
//       } else {
//         wordCount[word]++;
//       }
//     }
//   }
//   return wordCount;
// }
// console.log(
//   countWords(["hello", "world", "apple", "banana", "hello", "apple", 1])
// );
function stringFind(hello) {
  const word = hello;
  let index = -1;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "search") {
      index = i;
      console.log(index);
      break;
    }
  }
}
stringFind(["hello", "world", "search", "ROund", "HELLO", "search"]);

function findIndex(array, word) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      console.log(index);
      break;
    }
  }
  return index;
}
console.log(findIndex(["hello", "world", "searc", "round", "hello"], "search"));

function removeEgg(foods) {
  const food = foods;
  const copiedFood = food.slice();
  const reversedFood = copiedFood.reverse();
  let foodEgg = [];
  let eggCount = 0;

  for (let i = 0; i < copiedFood.length; i++) {
    if (copiedFood[i] === "egg" && eggCount < 2) {
      eggCount++;
      continue;
    }
    foodEgg.push(reversedFood[i]);
  }
  console.log(food);

  return foodEgg.reverse();
}

console.log(removeEgg(["egg", "More", "egg", "egg", "apple", "hello"]));

// const originalArray = ["hello", "hy"];
// const copiedArray = originalArray.slice();
// copiedArray[0] = "banana";
// console.log(originalArray);
// console.log(copiedArray);

function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      continue;
    } else if (i % 3 === 0) {
      console.log("fizz");
      continue;
    } else if (i % 5 === 0) {
      console.log("buzz");
      continue;
    }
    console.log(i);
  }
}
fizzBuzz();

//Can't understand!
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}
function unique(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    if (findIndex(result, word) === -1) {
      result.push(word);
    }
  }
  return result;
}
console.log(unique(["hello", "hello", "bam", "bam", "Faeez", "Faeez"]));
console.log(unique(["red", "green", "green", "red"]));
