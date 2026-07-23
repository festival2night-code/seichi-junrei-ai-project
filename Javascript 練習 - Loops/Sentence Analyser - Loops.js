function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);


function getPunctuationCount(sentence){
  let count = 0;
  const notPunctuation = "qwertyuiopasdfghjklzxcvbnm"
  for (const char of sentence.toLowerCase()) {
    if (char !== " " && !notPunctuation.includes(char)) {
      count++;
    }
  }
  return count;
}

function getWordCount(sentence){
  let count = 0;
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] == " "){
      count++;
    }
  }
  if (sentence.trim().length === 0) {
    return 0;
  } else {
  return count + 1; // Add 1 to account for the last word
  }
}

let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
