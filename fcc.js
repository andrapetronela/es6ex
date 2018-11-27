// 1. reverse the provided string

//function reverseString(str) {
//    let strArr = str.split('');
//    let reverseArr = strArr.reverse();
//    let stringArr = reverseArr.join('');
//    
//    console.log(stringArr);
//}
//
//reverseString('Hi, human! Glad someone is trying to read this!');


// 2. find the longest word in a string (return a number)

//function findLongest(str) {
//    let arrStr = str.split(' ');
//    let count = 0;
//    for (let i = 0; i < arrStr.length; i++) {
//        if (arrStr[i].length > count) {
//            count = arrStr[i].length;
//        }
//    }
//    console.log(count);
//}
//
//findLongest('My little cat has four legs.');


// 3. return an array that has the largest number from each provided sub-array

//function largestNum(arr) {
//    let maxArr = [];
//    
//    for (let i = 0; i < arr.length; i++) {
//        let max = arr[i][0];
//        for (let j = 0; j < arr[i].length; j++) {
//            if (arr[i][j] > max) {
//                max = arr[i][j];
//            }
//        }
//        maxArr.push(max);
//    }
//    console.log(maxArr);
//}
//
//largestNum([[4, 5, 7, 2], [12, 4, 55, 2], [10, 5, 12, 11], [11, 42, 2, 1]]);

// 4. check if a string ends with the given target

//function checkEnd(str, target) {
//    console.log(str.slice(str.length - target.length) === target);
//}
//
//checkEnd('JavaScript', 's');
//checkEnd('JavaScript', 't');

// 5. repeat a string for num times. return an empty string if num is not a positive number

//function repeatStr(str, num) {
//    let result = '';
//    while (num > 0) {
//        result += str;
//        num--;
//    }
//    console.log(result);
//}
//repeatStr('Hi, human!', 5);


















