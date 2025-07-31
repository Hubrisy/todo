export const emailValidation = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regex.test(email);
};

export const isString = (value: unknown): value is string =>
  typeof value === 'string';

export const isValidString = (
  value: unknown,
  min = 1,
  max = 300,
): value is string => {
  if (!isString(value)) {
    return false;
  }

  if (value.length < min || value.length > max) {
    return false;
  }

  return true;
};
