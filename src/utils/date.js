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

  let parsedDate = `${year}-${month}-${date}`;
  return parsedDate;
}

function addZero(baseDate) {
  return baseDate > 10 ? baseDate : `0${baseDate}`;
}
