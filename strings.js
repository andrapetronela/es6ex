const str = 'Abracadabra';

console.log(str);

const strLength = str.length;

console.log(strLength); // 11 




// ********* FIND A STRING IN A STRING ************

// indexOf()
console.log(str.indexOf('b')); // 1

// lastIndexOf()
console.log(str.lastIndexOf('b')); // 8

const sentence = 'This is a sentence.';

console.log(sentence.indexOf('is')); // 2

// search() - can take a regex as an argument

console.log(sentence.search('h')); // 1
console.log(sentence.search('t')); // 13






// ********************** EXTRACT STRING PARTS *******



// slice(start, end)
// substring(start, end)
// substr(start, end)




// slice() - accepts negative values

const slicedStr = str.slice(2, 5);
console.log(slicedStr); // rac

// rest of the string
console.log(str.slice(5)); // adabra



// substring() - doesn't accept negative values

const myStr = 'Apple, banana, kiwi';
const subString = myStr.substring(1, 5);
console.log(subString); // pple



// substr() - second parameter = the length of the extracted part 

const subStr = myStr.substr(0, 3);
console.log(subStr);





// ****************************** REPLACE ***************

// replaces only the first occurance


const longStr = 'This is a very nice place. I am happy that I could find this place.';

const replaced = longStr.replace('place', 'park');
console.log(replaced); // This is a very nice park. I am happy that I could find this place.

console.log(longStr); // This is a very nice place. I am happy that I could find this place.





// **************************** CONCAT *******************

const txt1 = 'Hello';
const txt2 = 'there';

const mergedText = txt1.concat(' ', txt2);

console.log(mergedText); // Hello there

console.log(txt1 + ' ' + txt2); // Hello there



// ************************** TRIM **********************
// remove the whitespaces from the beggining / end

const whiteSpaceString = '  Hello    ';
console.log(whiteSpaceString); //   Hello    

const trimString = whiteSpaceString.trim();
console.log(trimString); // Hello



// ************************ charAt() ********************

console.log(txt1.charAt(0)); // H




// ************** string to array ************************

const letters = 'a, v, f, x, h';

const newLett = letters.split(', '); // ["a", "v", "f", "x", "h"]
console.log(newLett);

console.log(letters.split('|')); // ["a, v, f, x, h"]

console.log(letters.split('')[0]) // a


fetch('https://jobs.github.com/positions.json?description=python&location=new+york')
    .then(response => response.json())
    .then(data => {    
            data.map(i => {
                const root = document.getElementById('root');
                const item = document.createElement('div');
                const location = document.createTextNode(i.location);
                const breakLine = document.createElement('br');
                const company = document.createTextNode(i.company);
                
                item.append(location);
                item.append(breakLine);
                item.append(company);
                root.appendChild(item);
            })
    });
