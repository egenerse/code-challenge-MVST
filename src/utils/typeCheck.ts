/**
 * Checks whether the provided value is a valid number.
 *
 * @param value - The value to be checked, which can be a number, undefined, or null.
 * @returns A boolean indicating whether the provided value is a valid number (true) or not (false).
 */
export function isNumber(value: number | undefined | null) {
  // Check if the 'value' is of type 'number.'
  return typeof value === 'number';
}
