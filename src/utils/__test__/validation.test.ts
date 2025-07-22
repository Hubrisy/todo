import {
  emailValidation,
  isString,
  isValidString,
  validatePhoneNumber,
} from '../validation';

describe('utils/validation emailValidation', () => {
  test('should return true for valid email', () => {
    const actualResult = emailValidation('test@test.com');
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  });

  test('should return false for invalid email #1', () => {
    const actualResult = emailValidation('test');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });

  test('should return false for invalid email #2', () => {
    const actualResult = emailValidation('test@test');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });

  test('should return false for invalid email #3', () => {
    const actualResult = emailValidation('test@test.');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
});

describe('/utils/validation validatePhoneNumber', () => {
  test('should return false for invalid phone number #1', () => {
    const actualResult = validatePhoneNumber('380666666666666');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
  test('should return false for invalid phone number #2', () => {
    const actualResult = validatePhoneNumber('06667');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
  test('should return false for invalid phone number #3', () => {
    const actualResult = validatePhoneNumber('380666666666');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
  test('should return false for invalid phone number #4', () => {
    const actualResult = validatePhoneNumber('test');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
});

describe('/utils/validation isString', () => {
  test('should return true for a string literal', () => {
    expect(isString('yo')).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(isString('')).toBe(true);
  });

  test('should return false for a number', () => {
    expect(isString(123)).toBe(false);
  });

  test('should return false for a boolean', () => {
    expect(isString(true)).toBe(false);
  });

  test('should return false for null', () => {
    expect(isString(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isString(undefined)).toBe(false);
  });

  test('should return false for an object', () => {
    expect(isString({})).toBe(false);
  });

  test('should return false for an array', () => {
    expect(isString([])).toBe(false);
  });

  test('should return false for a function', () => {
    expect(isString(() => {})).toBe(false);
  });
});

describe('/utils/validation isValidString', () => {
  test('should return false if length < 1', () => {
    expect(isValidString('', 1, 300)).toBe(false);
  });
  test('should return true for a string literal', () => {
    expect(isValidString('yo')).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(isValidString('', 0)).toBe(true);
  });

  test('should return false for a number', () => {
    expect(isValidString(123)).toBe(false);
  });

  test('should return false for a boolean', () => {
    expect(isValidString(true)).toBe(false);
  });

  test('should return false for null', () => {
    expect(isValidString(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isValidString(undefined)).toBe(false);
  });

  test('should return false for an object', () => {
    expect(isValidString({})).toBe(false);
  });

  test('should return false for an array', () => {
    expect(isValidString([])).toBe(false);
  });

  test('should return false for a function', () => {
    expect(isValidString(() => {})).toBe(false);
  });
  test('should return false if length is longer than max', () => {
    const expectedResult = false;
    const actualResult = isValidString('aaaa', 1, 3);
    expect(expectedResult).toBe(actualResult);
  });
  test('should return false if length is shorter than min', () => {
    const expectedResult = false;
    const actualResult = isValidString('', 1, 3);
    expect(expectedResult).toBe(actualResult);
  });
});
