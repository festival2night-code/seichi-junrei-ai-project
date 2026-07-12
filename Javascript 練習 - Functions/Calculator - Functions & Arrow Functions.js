const calculateSum = (num1, num2) => {
    return num1 + num2;
}

console.log(calculateSum(2 , 5)); 
console.log(calculateSum(10, 10));
console.log(calculateSum(5 , 5));

function calculateDifference(num1, num2) {
    return num1 - num2;
}


console.log(calculateDifference(22 ,5));
console.log(calculateDifference(12 ,1));
console.log(calculateDifference(17 ,9));

const calculateProduct = (num1,num2) =>{
    return num1 * num2;
}


console.log(calculateProduct(13 , 5));

function calculateQuotient(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
   return num1 / num2;
}


console.log(calculateQuotient(7 , 11));
console.log(calculateQuotient(3 , 0));

const calculateSquare = (num) => {
    return Math.pow(num, 2);
}


console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
     return Math.sqrt(num);
    }


console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));
