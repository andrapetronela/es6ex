Question 1.

a)
console.log(x); // 2
console.log(y); // 3
console.log(x * y); // 6

b)
func(0, 0) // 0
func(-1, 1) // 0
func(1, -1) // 2
func(-1, -1) // 2

c) 
console.log(multiplier.apply(5)); // 5
console.log(multiplier.apply(5)); // 15

Question 2. 

a)
console.log(x); // 3
console.log(y); // 4

b) 
function(1,10) // Error
function(5, 5) // Error
function(-1, -10) // Error
We get an error, as we are not calling the above declared function (named 'func'). 


Question 3. 
a)

// 0 1 2 3 4 5 6 7 8 9 10 

b) 

// 15 10 5 


c) 

func(15) // 0
func(17) // -3
func(3) // -2

Question 4. 
const A = [7, 2, 6];
const B = [1, 2, 3];

function union(A, B) {
    let union = [...A];
    for (let b of B) {
        if (!union.includes(b)) {
            union.push(b);
        }
    }
    return union;
}

console.log(union(A,B)); // [7, 2, 6, 1, 3]


function difference(A, B) {
    let difference = [];
    for (let a of A) {
        if (!B.includes(a)) {
            difference.push(a);
        }
    }
    for (let b of B) {
        if (!A.includes(b)) {
            difference.push(b);
        }
    }
    return difference;
}

console.log(difference(A, B)); // [7, 6, 1, 3]


