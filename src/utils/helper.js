export function formatDate(inputDate) {
  const [year, month, day] = inputDate.split("-");
  return `${month}/${day}/${year}`;
}
