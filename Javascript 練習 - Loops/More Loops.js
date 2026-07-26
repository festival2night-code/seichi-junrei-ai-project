function findLongestWord (str) {
    const myArray = str.split(' ');
    for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < myArray.length; j++) {
            if (myArray[i].length > myArray[j].length) {
                let temp = myArray[i];
                myArray[i] = myArray[j];
                myArray[j] = temp;
            }
        }
    }
    return myArray[0].length;
}

//console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"))

let num = 10;
function factorialCalculator(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;

//console.log(resultMsg);

function mutation (str) {
    str[0] = str[0].toLowerCase();
    str[1] = str[1].toLowerCase();
    let arr1 = str[0].split('');
    let arr2 = str[1].split('');
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i]) === false) {
            return false;
            break;
        };
    }
    return true;
}

/*console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Noel", "Ole"]));*/

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

/*console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)) */

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }
            return "No such property";
        }
    }
    return "No such contact";
}

/*console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Akira", "address")); // should return the string "No such property"
console.log(lookUpProfile("Bob", "potato")); // should return the string "No such contact" */

function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return "";
    }
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

/*console.log(repeatStringNumTimes("*", 3))
console.log(repeatStringNumTimes("abc", -2)) */