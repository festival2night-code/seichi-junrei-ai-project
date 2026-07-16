function booWho(value) {
    if (value === true){
        return true;
    } else if (value === false){
        return true;
    }
    return false;
}
console.log(booWho(true)); // true
console.log(booWho(false));
console.log(booWho([1, 2, 3])); // false
console.log(booWho([].slice)); 
console.log(booWho({ "a": 1 })); // false
console.log(booWho(1)); // false
console.log(booWho(NaN)); // false
console.log(booWho("a")); // false
console.log(booWho("true")); // false
console.log(booWho("false")); // false