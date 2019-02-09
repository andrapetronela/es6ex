const arr = ['milk', 'eggs', 'butter'];


// *****************  COPY an Array

const copyArr = [...arr];

arr[2] = 'orange';

console.log(arr); // ['milk', 'eggs', 'orange']
console.log(copyArr); // ['milk', 'eggs', 'butter']



// *****************  Array to STRING

// 1. .toString()
const arrToString = arr.toString();
console.log(arrToString); // milk,eggs,orange

// 2. .join('+') - add the separator
//const joinedArr = arr.join(); // milk,eggs,orange
//const joinedArr = arr.join(''); // milkeggsorange
//const joinedArr = arr.join(' '); // milk eggs orange
const joinedArr = arr.join(' * '); // milk * eggs * orange
console.log(joinedArr);



// *****************  Array reversed - modifies the array

const reversedArr = arr.reverse();
console.log(reversedArr); // ["orange", "eggs", "milk"]
console.log(arr); // ["orange", "eggs", "milk"]






// ********************** REMOVE  /  ADD **************//



// *****************  pop() - removes the last item

arr.pop();
console.log(arr); // ["orange", "eggs"]


// *****************  push() - add at the end

arr.push('yogurt');
console.log(arr);


// **************** shift() - removes first item

arr.shift();
console.log(arr); // ["eggs", "yogurt"]


// **************** unshift() - removes first item

arr.unshift('butter');
console.log(arr); // ["butter", "eggs", "yogurt"]

// shift    -  pop  
// unshift  +  push




// ********************* SPLICE ************************//

// 1. add 

// (where to start adding, elements to delete)
arr.splice(arr.length, 0, 'lemon', 'bread');
console.log(arr); // ["butter", "eggs", "yogurt", "lemon", "bread"]

// 2. remove

// (where to place the new element, how many to delete)
arr.splice(0, 1, 'cacao');
console.log(arr); // ["cacao", "eggs", "yogurt", "lemon", "bread"]

// (where to start removing, how many to delete)
arr.splice(1, 2);
console.log(arr); // ["cacao", "lemon", "bread"]


// ******************** concat

const concatArr = arr.concat(copyArr);
console.log(concatArr); // ["cacao", "lemon", "bread", "milk", "eggs", "butter"]

// or arr1.concat(arr2, arr3);





// *****************  SLICE **********************//

// creates a new array with a slice of the first one (remains unchanged)

const slicedArr = concatArr.slice(0, 2);
console.log(slicedArr); //["cacao", "lemon"] 
console.log(concatArr); // ["cacao", "lemon", "bread", "milk", "eggs", "butter"]

const restOfArray = concatArr.slice(3);
console.log(restOfArray); //["milk", "eggs", "butter"];






// ******************* MAX and MIN ********************


const numArr = [5, 2, 8, 7, 3];

console.log(Math.max(...numArr)); // 8
console.log(Math.min(...numArr)); // 2



// ********************* SORT **************************

const ascendingArr = numArr.sort((a, b) => a-b);
console.log(ascendingArr); // [2, 3, 5, 7, 8]

// second max number
const secondMax = ascendingArr[ascendingArr.length-2];
console.log('secondMax', secondMax); // 7

// second min number
const secondMin = ascendingArr[1];
console.log('secondMin', secondMin); // 3

const descendingArr = numArr.sort((a, b) => b-a);
console.log(descendingArr); // [8, 7, 5, 3, 2]



// alphabetical sort
console.log('con', concatArr);
const sortedArr = concatArr.sort();
console.log(sortedArr); // ["bread", "butter", "cacao", "eggs", "lemon", "milk"]
console.log('concat', concatArr);



// sort in random order

const randomOrder = numArr.sort((a, b) => 0.5 - Math.random());
console.log('random', randomOrder);


// sort object arrays

const kids = [
    { 
        name: 'Ami',
        year: 2016
    },
    {
        name: 'Jane',
        year: 2010
    },
    {
        name: 'Mark',
        year: 2011
    }
];

const sortedKidsByYear = kids.sort((a, b) => a.year - b.year);
console.log('sortedKidsByYear', sortedKidsByYear);


// descending order ************ REVERSE ****************
// !!!! changes the array in place == destructive
const revArr = sortedArr.reverse();
console.log(revArr); // ["milk", "lemon", "eggs", "cacao", "butter", "bread"]

console.log(sortedArr); // ["milk", "lemon", "eggs", "cacao", "butter", "bread"]





// ********************** ITERATION ******************




// forEach

const iterationFunct = () => {
    sortedArr.forEach(i => {
        console.log(`I am ${i} and I am at index ${sortedArr.indexOf(i)}`);
    });
}

iterationFunct();





// for 

for (let i = 0; i < sortedArr.length; i++) {
    console.log(`My name is ${sortedArr[i]} and I rock.`);
}





// map 

const mapArr = sortedArr.map(item => item + ' yamy');
console.log(mapArr); // ["milk yamy", "lemon yamy", "eggs yamy", "cacao yamy", "butter yamy", "bread yamy"]




// filter 

const filteredArr = numArr.filter(item => item > 3);
console.log(filteredArr); // [8, 7, 5]



// reduce 

const reducedArr = numArr.reduce((acc, curr) => acc + curr);
console.log(reducedArr); // 25



// every 

const checkAge = (age) => { return age > 2 }
console.log(numArr.every(checkAge)); // false

// some 
console.log(numArr.some(checkAge)); // true

