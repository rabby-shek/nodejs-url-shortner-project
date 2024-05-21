/**
 * Generates a random alphanumeric ID of a specified length.
 *
 * This function creates a random string consisting of uppercase letters,
 * lowercase letters, and digits. The length of the generated ID can be
 * customized by passing the desired length as an argument.
 *
 * @param {number} length - The desired length of the generated ID.
 * @returns {string} - A randomly generated alphanumeric ID.
 *
 * @example
 *
 * // Generate a random alphanumeric ID of length 10
 * const id = generateCustomId(10);
 * console.log(`Generated ID: ${id}`);
 */
const generateCustomId = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  // Loop to generate each character of the ID
  for (let i = 0; i < length; i++) {
    // Select a random character from the characters string
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

module.exports = generateCustomId;
