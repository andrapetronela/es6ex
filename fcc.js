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














