export const getDate = () => {
  const date = new Date();

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dayName = days[date.getDay()];

  return { date, dayName };
};
