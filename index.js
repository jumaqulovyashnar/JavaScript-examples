
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


// 2-exam


// var map = function(arr, fn) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = fn(arr[i], i);
//     }

//     return result;
// };


// 3-exam

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


// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (key in cache) {
//       return cache[key];
//     }

//     const result = fn(...args);
//     cache[key] = result;

//     return result;
//   };
// }


// let  addTwoPromises = async function (promise1, promise2) {
//     const [a, b] = await Promise.all([promise1, promise2]);
//     return a + b;
// };




// example leetcode

// async function sleep(millis) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, millis);
//   });
// }

// async function demo() {
//   console.log("Start");
//   await sleep(2000); 
//   console.log("End after 2 seconds");
// }

// demo();


//  leetcode 

// var cancellable = function(fn, args, t) {
//   const timerId = setTimeout(() => {
//     fn(...args);
//   }, t);
//   const cancelFn = function() {
//     clearTimeout(timerId);
//   };

//   return cancelFn;
// };


// leetcode exam 

// let cancellable = function(fn, args, t) {
//   fn(...args);
//   const intervalId = setInterval(() => {
//     fn(...args);
//   }, t);
//   const cancelFn = function() {
//     clearInterval(intervalId);
//   };

//   return cancelFn;
// };



// exams

// let  timeLimit = function(fn, t) {
//   return async function(...args) {
//     return new Promise((resolve, reject) => {
//       const timer = setTimeout(() => {
//         reject("Time Limit Exceeded");
//       }, t);
//       fn(...args)
//         .then((res) => {
//           clearTimeout(timer);
//           resolve(res);
//         })
//         .catch((err) => {
//           clearTimeout(timer);
//           reject(err);
//         });
//     });
//   };
// };



// last  exam

// class TimeLimitedCache {
//   constructor() {
//     this.cache = new Map();
//   }
//   set(key, value, duration) {
//     const now = Date.now();
//     const exists =
//       this.cache.has(key) &&
//       this.cache.get(key).expire > now;
//     if (this.cache.has(key)) {
//       clearTimeout(this.cache.get(key).timer);
//     }
//     const expire = now + duration;
//     const timer = setTimeout(() => {
//       this.cache.delete(key);
//     }, duration);
//     this.cache.set(key, { value, expire, timer });
//     return exists;
//   }
//   get(key) {
//     const data = this.cache.get(key);
//     if (!data) return -1;
//     if (Date.now() > data.expire) {
//       this.cache.delete(key);
//       return -1;
//     }
//     return data.value;
//   }
//   count() {
//     const now = Date.now();
//     let total = 0;
//     for (const [key, data] of this.cache) {
//       if (data.expire > now) {
//         total++;
//       }
//     }

//     return total;
//   }
// }


// exams 

// let  debounce = function (fn, t) {
//     let timer = null;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn(...args);
//         }, t);
//     };
// };


// leetcode 

// let promiseAll = function(functions) {
//   return new Promise((resolve, reject) => {
//     const results = [];
//     let completed = 0;
//     if (functions.length === 0) {
//       resolve([]);
//       return;
//     }
//     functions.forEach((fn, index) => {
//       fn()
//         .then((value) => {
//           results[index] = value;
//           completed++;
//           if (completed === functions.length) {
//             resolve(results);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// };


// leetcode   exam

// function isEmpty(obj) {
//   if (Array.isArray(obj)) {
//     if (obj.length === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   } 
//   else {
//     if (Object.keys(obj).length === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }


// leetcode exams


// let chunk = function(arr, size) {
//   let result = [];

//   for (let i = 0; i < arr.length; i += size) {
//     let piece = arr.slice(i, i + size);
//     result.push(piece);
//   }

//   return result;
// };
