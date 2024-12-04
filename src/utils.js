function isPalindrome(word) {
  if (word === "") {
    return false;
  }

  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must contain only alphabetic characters");
  }

  const cleanedWord = word.toLowerCase();

  return cleanedWord === cleanedWord.split("").reverse().join("");
}

export default isPalindrome;
