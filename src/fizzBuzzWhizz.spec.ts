import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should works', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });
  test('should works 2', () => {
    const result = game(2);
    expect(result).toEqual(2);
  });

  test('should return Fizz when divisible by 3', () => {
    expect(game(6)).toEqual("Fizz");
    expect(game(9)).toEqual("Fizz");
  });

    test('should return Buzz when divisible by 5', () => {
    expect(game(10)).toEqual("Buzz");
    expect(game(20)).toEqual("Buzz");
  });

});