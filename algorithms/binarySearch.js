const array = [1, 5, 7, 11, 15, 16, 20, 51, 77, 82, 101];

const targetNumber = 101;
let startIndex = 0;
let endIndex = array.length - 1;
let middleArr;

const binarySearch = () => {
    
    // while start and end points do not intersect
    while (startIndex <= endIndex) {
         middleArr = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (array[middleArr] === targetNumber) {
             console.log(middleArr);
        }
        // move start and end points
        if (array[middleArr] < targetNumber) {
            startIndex = middleArr+1;     
        } else { 
                endIndex = middleArr-1; 
        }
    }
    return -1;
}

binarySearch()


 