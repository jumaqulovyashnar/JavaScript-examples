//Sizga n soni beriladi.1dan n gacha sonlarni chiqaring.Lekin:3 ga bo'linsa →"Fizz" 5 ga bo'linsa →"Buzz" Ham 3 ga ham 5 ga bo'linsa →"FizzBuzz" Aks holda sonning o'zi.


// let numbers = 53
// let word = 'fizz'
// let str = 'buzz'
// if (numbers % 5 === 0 && numbers % 3 === 0) {
//     console.log(`${word},${str}`);
// } else if (numbers % 3 === 0) {
//     console.log(word);
// } else if (numbers % 5 === 0) {
//     console.log(str);
// }
// else {
//     console.log(numbers);
// }


//Number of Steps to Reduce a Number to Zero. Sizga num nomli bitta butun son beriladi.Sizning vazifangiz — shu sonni 0 ga aylantirish.Buning uchun quyidagi qoidalarga amal qilishingiz kerak:
// Agar son juft bo'lsa, uni 2 ga bo'ling.Agar son toq bo'lsa, undan 1 ni ayiring.Har safar bajarilgan amal 1 qadam hisoblanadi. Siz son 0 bo'lguncha shu qoidalarni takrorlashingiz kerak.
// Oxirida esa 0 ga yetish uchun jami nechta qadam bajarilganini qaytaring.




//  palindrome masalasi .

let isPalindrome = function (s) {
    let Palindrome = s.toLowerCase().replace(/[^a-z0-9]/g,"");
    let isPalindromes = Palindrome.split("").reverse().join("");
    if (Palindrome === isPalindromes) {
        return true;
    } else {
        return false;
    }
};