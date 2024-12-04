// Your tests here
import isPalindrome from "../utils";

describe("isPalindrome", () => {
  it("should return true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
  });

  it("should return false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
  });

  it("should return true for palindromes with mixed case", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("should return false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("should throw an error for input with non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow("Input must contain only alphabetic characters");
    expect(() => isPalindrome("!racecar")).toThrow("Input must contain only alphabetic characters");
  });

  it("should throw an error for non-string input", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
    expect(() => isPalindrome(["racecar"])).toThrow("Input must be a string");
    expect(() => isPalindrome({ word: "racecar" })).toThrow("Input must be a string");
  });
});
