/**
 * @fileoverview utilities
 */

/**
 * @returns {string} random id as key
 */
export function id(): string {
	return ((Math.random() + Math.random()) * 997).toString(36).replace('.', '');
}
