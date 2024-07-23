/**
 * This function is taken from ChatGPT
 * Consider to use alternative or libraries
 * @returns string of id
 */
export function generateID() {
  // Example function to generate a unique ID
  return Math.random().toString(36).substring(2, 15);
}

/**
 * @param {string | number | Date} date
 */
export function getDate(date) {
  return new Date(date);
}
