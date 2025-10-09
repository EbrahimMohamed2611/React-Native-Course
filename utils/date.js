export function getDateMinusDays(date, days) {
  console.log(date.toISOString());
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
