function isPalindrome(word) {
  // Write your algorithm here
  // 1.Receive the input string
  // 2. Convert the string to lowercase
  // 3. Remove any non-alphanumeric characters from the string (e.g., spaces, punctuation)
  // 4. Compare the reversed and original strings
  // 5. If the reversed string matches the original string, return true; otherwise, return false
  word = word.toLowerCase();
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;

}

/* 
  Add your pseudocode here
  Pseudocode:
  FUNCTION isPalindrome(word)
    SET reversedWord = REVERSE(word)
    IF word IS EQUAL TO reversedWord
        RETURN true
    ELSE
        RETURN false
END FUNCTION
*/

/*
  Add written explanation of your solution here
  Explanation:
  1. Convert the input string to lowercase using `toLowerCase()`.
  2. Split the string into an array of characters, reverse the array, and join it back into a string.
  3. Compare the reversed string with the original.
  4. If they match, return `true`; otherwise, return `false
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
  
}

module.exports = isPalindrome;
