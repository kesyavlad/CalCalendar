const getActiveDays = (month, year, dates) => {
  const filteredDates = dates.filter(day => {
    const dataMonth = new Date(day.date).getMonth() + 1;
    const dataYear = new Date(day.date).getFullYear();
    return dataMonth === month && dataYear === year;
  });
  return filteredDates.length;
};
export default getActiveDays;
