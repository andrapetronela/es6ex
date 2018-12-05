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

// 9. The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map to return a new array of objects with only title and rating keys, but where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may want to convert them into numbers to perform mathematical operations on them.

//
//let watchList = [
//                 {  
//                   "Title": "Inception",
//                   "Year": "2010",
//                   "Rated": "PG-13",
//                   "Released": "16 Jul 2010",
//                   "Runtime": "148 min",
//                   "Genre": "Action, Adventure, Crime",
//                   "Director": "Christopher Nolan",
//                   "Writer": "Christopher Nolan",
//                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//                   "Language": "English, Japanese, French",
//                   "Country": "USA, UK",
//                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//                   "Metascore": "74",
//                   "imdbRating": "8.8",
//                   "imdbVotes": "1,446,708",
//                   "imdbID": "tt1375666",
//                   "Type": "movie",
//                   "Response": "True"
//                },
//                {  
//                   "Title": "Interstellar",
//                   "Year": "2014",
//                   "Rated": "PG-13",
//                   "Released": "07 Nov 2014",
//                   "Runtime": "169 min",
//                   "Genre": "Adventure, Drama, Sci-Fi",
//                   "Director": "Christopher Nolan",
//                   "Writer": "Jonathan Nolan, Christopher Nolan",
//                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//                   "Language": "English",
//                   "Country": "USA, UK",
//                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//                   "Metascore": "74",
//                   "imdbRating": "8.6",
//                   "imdbVotes": "910,366",
//                   "imdbID": "tt0816692",
//                   "Type": "movie",
//                   "Response": "True"
//                },
//                {
//                   "Title": "The Dark Knight",
//                   "Year": "2008",
//                   "Rated": "PG-13",
//                   "Released": "18 Jul 2008",
//                   "Runtime": "152 min",
//                   "Genre": "Action, Adventure, Crime",
//                   "Director": "Christopher Nolan",
//                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//                   "Language": "English, Mandarin",
//                   "Country": "USA, UK",
//                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//                   "Metascore": "82",
//                   "imdbRating": "9.0",
//                   "imdbVotes": "1,652,832",
//                   "imdbID": "tt0468569",
//                   "Type": "movie",
//                   "Response": "True"
//                },
//                {  
//                   "Title": "Batman Begins",
//                   "Year": "2005",
//                   "Rated": "PG-13",
//                   "Released": "15 Jun 2005",
//                   "Runtime": "140 min",
//                   "Genre": "Action, Adventure",
//                   "Director": "Christopher Nolan",
//                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//                   "Language": "English, Urdu, Mandarin",
//                   "Country": "USA, UK",
//                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//                   "Metascore": "70",
//                   "imdbRating": "8.3",
//                   "imdbVotes": "972,584",
//                   "imdbID": "tt0372784",
//                   "Type": "movie",
//                   "Response": "True"
//                },
//                {
//                   "Title": "Avatar",
//                   "Year": "2009",
//                   "Rated": "PG-13",
//                   "Released": "18 Dec 2009",
//                   "Runtime": "162 min",
//                   "Genre": "Action, Adventure, Fantasy",
//                   "Director": "James Cameron",
//                   "Writer": "James Cameron",
//                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//                   "Language": "English, Spanish",
//                   "Country": "USA, UK",
//                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//                   "Metascore": "83",
//                   "imdbRating": "7.9",
//                   "imdbVotes": "876,575",
//                   "imdbID": "tt0499549",
//                   "Type": "movie",
//                   "Response": "True"
//                }
//];
//
//var filteredList = watchList.map(item => ({ 'Title': item.Title, 'rating': item.imdbRating })).filter(item => item.rating >= 8);
//
//console.log(filteredList); 



// 10. Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.

//function sliceArray(anim, beginSlice, endSlice) {
//  return anim.slice(beginSlice, endSlice);
//}
//var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
//sliceArray(inputAnim, 1, 3);


// 11. Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

//function splitify(str) {
//  console.log(str.split(/\W/));
//}
//splitify("Hello World,I-am code");

// 12. Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.

//
//function sentensify(str) {
//  return str.split(/\W/).join(' ');
//}
//sentensify("May-the-force-be-with-you");

// 13. Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

//The input is a string with spaces and title-cased words
//
//The output is a string with the spaces between words replaced by a hyphen (-)
//
//The output should be all lower-cased letters
//
//The output should not have any spaces
                                                                           
//let globalTitle = "Winter Is  Coming";
//function urlSlug(title) {
//  return title.toLowerCase().trim().split(/\s+/).join('-');
//}
//let winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
//console.log(winterComing);

// 14. Sort the array

//function alphabeticalOrder(arr) {
//  return arr.sort(function(a,b) {
//    return a > b; 
//    }); 
//}
//console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


// 15. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
//
//let watchList = [
//                 {  
//                   "Title": "Inception",
//                   "Year": "2010",
//                   "Rated": "PG-13",
//                   "Released": "16 Jul 2010",
//                   "Runtime": "148 min",
//                   "Genre": "Action, Adventure, Crime",
//                   "Director": "Christopher Nolan",
//                   "Writer": "Christopher Nolan",
//                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//                   "Language": "English, Japanese, French",
//                   "Country": "USA, UK",
//                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//                   "Metascore": "74",
//                   "imdbRating": "8.8",
//                   "imdbVotes": "1,446,708",
//                   "imdbID": "tt1375666",
//                   "Type": "movie",
//                   "Response": "True"
//                },
//                {  
//                   "Title": "Interstellar",
//                   "Year": "2014",
//                   "Rated": "PG-13",
//                   "Released": "07 Nov 2014",
//                   "Runtime": "169 min",
//                   "Genre": "Adventure, Drama, Sci-Fi",
//                   "Director": "Christopher Nolan",
//                   "Writer": "Jonathan Nolan, Christopher Nolan",
//                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//                   "Language": "English",
//                   "Country": "USA, UK",
//                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//                   "Metascore": "74",
//                   "imdbRating": "8.6",
//                   "imdbVotes": "910,366",
//                   "imdbID": "tt0816692",
//                   "Type": "movie",
//                   "Response": "True"
//                },
//                {
//                   "Title": "The Dark Knight",
//                   "Year": "2008",
//                   "Rated": "PG-13",
//                   "Released": "18 Jul 2008",
//                   "Runtime": "152 min",
//                   "Genre": "Action, Adventure, Crime",
//                   "Director": "Christopher Nolan",
//                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//                   "Language": "English, Mandarin",
//                   "Country": "USA, UK",
//                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//                   "Metascore": "82",
//                   "imdbRating": "9.0",
//                   "imdbVotes": "1,652,832",
//                   "imdbID": "tt0468569",
//                   "Type": "movie",
//                   "Response": "True"
//                },
//                {  
//                   "Title": "Batman Begins",
//                   "Year": "2005",
//                   "Rated": "PG-13",
//                   "Released": "15 Jun 2005",
//                   "Runtime": "140 min",
//                   "Genre": "Action, Adventure",
//                   "Director": "Christopher Nolan",
//                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//                   "Language": "English, Urdu, Mandarin",
//                   "Country": "USA, UK",
//                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//                   "Metascore": "70",
//                   "imdbRating": "8.3",
//                   "imdbVotes": "972,584",
//                   "imdbID": "tt0372784",
//                   "Type": "movie",
//                   "Response": "True"
//                },
//                {
//                   "Title": "Avatar",
//                   "Year": "2009",
//                   "Rated": "PG-13",
//                   "Released": "18 Dec 2009",
//                   "Runtime": "162 min",
//                   "Genre": "Action, Adventure, Fantasy",
//                   "Director": "James Cameron",
//                   "Writer": "James Cameron",
//                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//                   "Language": "English, Spanish",
//                   "Country": "USA, UK",
//                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//                   "Metascore": "83",
//                   "imdbRating": "7.9",
//                   "imdbVotes": "876,575",
//                   "imdbID": "tt0499549",
//                   "Type": "movie",
//                   "Response": "True"
//                }
//];
//
//let christopherMovies = watchList.filter(item => item.Director === 'Christopher Nolan');
//let movies = watchList.filter(item => item.Director === 'Christopher Nolan').map(item => Number(item.imdbRating)).reduce((acc, curr) => acc + curr);
//
//let averageRating = movies / christopherMovies.length;


// 16. Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
//
//function alphabeticalOrder(arr) {
//  return arr.sort();
//}
//alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


// 17. Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

//var globalArray = [5, 6, 3, 2, 9];
//function nonMutatingSort(arr) {
//  // Add your code below this line
//  let newArr = [];
//  return newArr.concat(arr).sort();
//  // Add your code above this line
//}
//console.log(nonMutatingSort(globalArray));

// 18. Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//function diffArray(arr1, arr2) {
//  let newArr = arr1.concat(arr2);
//    
//  let result = [];
//  let countNum = newArr.filter(item => {
//      if (!arr1.includes(item) || !arr2.includes(item)) {
//          return result.push(item);
//      }
//  })
//  return result;
//}
//
//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// 19. You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments

//function destroyer(arr) {
//  var args = Array.from(arguments).slice(1);
//  return arr.filter(function(item) {
//    return !args.includes(item);
//  });
//}
//
//console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// 20. Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//function spinalCase(str) {
//  return console.log(str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase());
//}
//
//spinalCase('This Is Spinal Tap');

// 21. Return true if the given string is a palindrome. Otherwise, return false.

//function palindrome(str) {
//  return str.replace(/[\W]/g, '').toLowerCase() === str.replace(/[\W]/g, '').toLowerCase().split('').reverse().join('');
//    
//}
//
//palindrome("eyes");


// 22. Transform any number in a roman number.

//decimal_list = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//roman_list = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//
//function roman(num) {
//    let romanized = '';
//    for (let i = 0; i < decimal_list.length; i++) {
//        while (decimal_list[i] <= num) {
//          romanized += roman_list[i];
//          num -= decimal_list[i];
//        }
//      }
//  console.log(romanized);
//}
//roman(11);


