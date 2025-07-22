export const emailValidation = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regex.test(email);
};

export const validatePhoneNumber = (phoneNumber: string) => {
  const regex = /^[0-9]{10}$/;

  return regex.test(phoneNumber);
};

export const isNumber = (value: unknown): value is number =>
  typeof value === 'number';

// export const isValidNumber = (
//   value: unknown,
//   min = 1,
//   max = 300,
// ): value is string => {
//   if (!isNumber(value)) {
//     return false;
//   }

//   const digits = (value.match(/\d/g) || []).length;

//   return digits >= min && digits <= max;
// };

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
