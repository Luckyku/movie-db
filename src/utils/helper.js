export function formatDate(inputDate) {
  const [year, month, day] = inputDate.split("-");
  return `${month}/${day}/${year}`;
}
export function formatDatePicker (date) {
  if (!date) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};