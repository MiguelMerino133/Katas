import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should works', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });
  test('should works 2', () => {
    const result = game(2);
    expect(result).toEqual("Whizz");
  });
  test('should return Fizz when divisible by 3', () => {
    expect(game(6)).toEqual("Fizz");
    expect(game(9)).toEqual("Fizz");
  });
  test('should return Buzz when divisible by 5', () => {
    expect(game(10)).toEqual("Buzz");
    expect(game(20)).toEqual("Buzz");
  });
  test('should return FizzBuzz when divisible by 3 and 5', () => {
    expect(game(15)).toEqual("FizzBuzz");
    expect(game(30)).toEqual("FizzBuzz");
    expect(game(75)).toEqual("FizzBuzz");
  });
});

describe('Bonus: Whizz for prime numbers', () => {
  test('should return Whizz when the number is prime', () => {
    expect(game(7)).toEqual("Whizz");
    expect(game(11)).toEqual("Whizz");
  });
  test('should return FizzWhizz for 3', () => {
    expect(game(3)).toEqual("FizzWhizz");
  });
  test('should return BuzzWhizz for 5', () => {
    expect(game(5)).toEqual("BuzzWhizz");
  });
  test('should not treat 1 as prime', () => {
    expect(game(1)).toEqual(1);
  });
    test('should handle edge cases up to 100', () => {
    expect(game(89)).toEqual("Whizz");
    expect(game(96)).toEqual("Fizz");
    expect(game(95)).toEqual("Buzz");
  });
});