import { getFormattedDate, months } from '../../hooks/useDate';

describe(`utils/date`, () => {
  test(`should return the correct date format if days are 0`, () => {
    const actualResult = getFormattedDate(0);

    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const expectedResult = `${day} ${month}, ${year}`;

    expect(actualResult).toBe(expectedResult);
  });

  test(`should return the correct date format if days are 32`, () => {
    const actualResult = getFormattedDate(32);

    const date = new Date();
    date.setDate(date.getDate() + 32);

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const expectedResult = `${day} ${month}, ${year}`;

    expect(actualResult).toBe(expectedResult);
  });

  test(`should throw an error if days are less than 0`, () => {
    let error: unknown;

    try {
      getFormattedDate(-1);
    } catch (err) {
      error = err;
    }

    expect(error).toEqual(new Error('Days cannot be negative'));
  });
});
