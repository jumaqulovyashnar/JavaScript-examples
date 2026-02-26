
// 1-exam

// function createCounter(init = 5) {
//     let count = init;

//     return {
//       increment() {
//         count++;
//         return count;
//       },

//       decrement() {
//         count--;
//         return count;
//       },

//       reset() {
//         count = init;
//         return count;
//       }
//     };
//   }


//2-exam


// var map = function(arr, fn) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = fn(arr[i], i);
//     }

//     return result;
// };


//3-exam

// var filter = function(arr, fn) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (Boolean(fn(arr[i], i))) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// };



// leetcode exams

// function createHelloWorld() {
//     return function() {
//      return  'Hello World'
//     }
// }
// const  newFunction=createHelloWorld();


// function argumentsLength(...args){
//     return args.length
// }
// argumentsLength()


// letcode exam

// function once(fn) {
//   let called = false;

//   return function(...args) {
//     if (called) return undefined;

//     called = true;
//     return fn(...args);
//   };
// }

// once()


function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}