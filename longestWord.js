//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.

function findLongestWord(str) {
  let nonText = /([^A-Z a-z])+/g;
  let text = str.replace(nonText, "").split(" ");
  let longestText = "";
  let longestCount = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i].length > longestCount) {
      longestCount = text[i].length;
      longestText = text[i];
    }
  }
  console.log(longestText.length);
}
findLongestWord(
  "I am meatloaf with mash potatoes, and spanich or green beans."
);
