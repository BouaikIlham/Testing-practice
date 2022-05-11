const calculator = require('./calculator');

describe('calculator method functionalities', () => {
  const calc = new calculator();
  describe('add two numbers', () => {
    test('adds two numbers together', () => {
      expect(calc.add(2, 5)).toBe(7);
    })
    test('adds two numbers together', () => {
      expect(calc.add(10, 5)).toBe(15);
    })
    test('adds two numbers together', () => {
      expect(calc.add(50, 10)).toBe(60);
    })
  })
  describe('subtract a number from another number', () => {
    test('subtract a number from another number', () => {
      expect(calc.subtract(10, 5)).toBe(5);
    })
    test('subtract a number from another number', () => {
      expect(calc.subtract(20, 2)).toBe(18);
    })
    test('subtract a number from another number', () => {
      expect(calc.subtract(50, 10)).toBe(40);
    })
  })

  describe('divide two numbers', () => {
    test('divide two numbers', () => {
      expect(calc.divide(10, 5)).toBe(2);
    })
    test('divide two numbers', () => {
      expect(calc.divide(20, 2)).toBe(10);
    })
    test('divide two numbers', () => {
      expect(calc.divide(50, 10)).toBe(5);
    })
  })

  describe('multiply two numbers', () => {
    test('multiply two numbers', () => {
      expect(calc.multiply(10, 5)).toBe(50);
    })
    test('multiply two numbers', () => {
      expect(calc.multiply(20, 2)).toBe(40);
    })
    test('multiply two numbers', () => {
      expect(calc.multiply(50, 10)).toBe(500);
    })
  })

})