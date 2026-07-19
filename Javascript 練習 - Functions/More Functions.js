function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
console.log(convertCtoF(0)); 
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(0));



function cardCounter(card){
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;
  };
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
let count = 0;
console.log(cardCounter(2));


function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
    return year + " is a leap year.";
  } else {
    return year + " is not a leap year.";
  }
}
let year = 2020;
let result = isLeapYear(year);
console.log(result);


function truncateString(str,num){
  if (str.length > num) {
    return str.slice(0,num) + "...";
  }
  return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));



function confirmEnding(str, target) {
  if (str[str.length - 1] === target) {
    return true;
  } else if (str.slice(str.length - target.length) === target) {
    return true;
  }
  return false;
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("He has to give me a new name", "name"));