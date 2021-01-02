/**
 * @fileoverview utilities
 */

/**
 * @returns {string} random id as key
 */
export function id(): string {
  return ((Math.random() + Math.random()) * 997).toString(36).replace('.', '');
}

export const PUBLISHABLE_KEY = "";

export const RECAPTCHA_DATA_SITE_KEY = "";

// const ide = <T,>(n: T) => {
//   return 1;
// }
