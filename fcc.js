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


// 6. Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

//function getIndexToIns(arr, num) {
//    arr.push(num);
//    let sortedArr = arr.sort(function(a, b) {
//        return a - b;
//    })
//    console.log(sortedArr);
//    console.log(sortedArr.indexOf(num));
//    
//    
//}
//
//getIndexToIns([70, 60], 50);


// 7. Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
//function mutation(arr) {
//    let rgx = arr[1].toLowerCase();
//    let str = arr[0].toLowerCase();
//    for (let i = 0; i < rgx.length; i++) {
//        if (str.indexOf(rgx[i]) < 0 )
//            return console.log(false);
//    }
//    return console.log(true);
//}
//
//mutation(["hello", "hey"]);

// 8. Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//function chunkArrayInGroups(arr, size) {
//    let result = [];
//    for (let i=0; i <arr.length; i+=size) {
//        result.push(arr.slice(i, size+i));        
//    }
//    return console.log(result);
//  
//}
//
//chunkArrayInGroups(["a", "b", "c", "d"], 2);















