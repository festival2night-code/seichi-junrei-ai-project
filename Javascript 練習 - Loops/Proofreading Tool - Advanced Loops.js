
function isPalindrome(word) {
    const normalized = word.toLowerCase();
    for (let i = 0; i < normalized.length / 2; i++) {
        if (normalized[i] !== normalized[normalized.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function findPalindromeBreaks(words) {
    if (words.length === 0) {
        return [];
    }
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i]) === false) {
            result.push(i);
        }
    }
    return result;
}

function findRepeatedPhrases(words, phraseLength) {
    if (words.length <= phraseLength) {
        return [];
    } 
    let dict = {}; 
    for (let i = 0; i <= words.length - phraseLength; i++) {
        let phrase = words.slice(i, i + phraseLength);
        let key = phrase.join(",");
        if (dict[key]) {
            dict[key].push(i);
        } else {
            dict[key] = [i];
        }
    }
    let result = [];
    for (let key in dict) {
        let indices = dict[key];
        //console.log(indices)
        if (indices.length >= 2) {

            result = result.concat(indices);
           // console.log(result)
        }
    }
    return result.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
    let result =[];
    if (texts.length === 0) {
        return [];
    }
    for (let i = 0; i < texts.length; i++) {
        let palindromeBreaks = findPalindromeBreaks(texts[i]);
        let repeatedIndices = findRepeatedPhrases(texts[i], phraseLength);
        result.push({
            palindromeBreaks: palindromeBreaks,
            repeatedPhrases: repeatedIndices
        });
    }
    console.log(result);
    return result;
}

//console.log(findRepeatedPhrases(["a", "b", "c", "a", "b", "c", "d"], 3)); // [0, 3]
//analyzeTexts([["a", "b", "c", "a", "b", "c", "d"], ["x", "y", "z"]], 3);