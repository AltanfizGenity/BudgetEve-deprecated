const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
/**
 *
 * @param {Date} iDate
 * @returns
 */
export function formatDateID(iDate) {
  let date = iDate.getDate();
  let month = iDate.getMonth();
  let year = iDate.getFullYear();
  return `${year}${addZero(month)}${addZero(date)}`;
}

export function getDateOfFormattedDateID(dateID = "") {
  let year = dateID.slice(0, 4);
  let month = dateID.slice(4, 6);
  let date = dateID.slice(6);

  let parsedDate = `${date} ${months[removeZero(month)]} ${year}`;
  return parsedDate;
}

function addZero(baseDate) {
  return baseDate >= 10 ? baseDate : `0${baseDate}`;
}

function removeZero(baseDate) {
  return baseDate >= 10 ? baseDate : baseDate[1];
}
