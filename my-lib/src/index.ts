/**
 * @packageDocumentation A small library for common math functions.
 */

 /**
  * Calculates the average of three numbers.
  * 
  * @param a - First number
  * @param b - Second number
  * @param c - Third number
  * 
  * @public
  */
 export function avg(a: number, b: number, c: number): number {
   return sum3(a, b, c) / 3;
 }

 /**
  * Calculates sum of three numbers.
  * 
  * @param a - First number
  * @param b - Second number
  * @param c - Third number
  * 
  * @beta
  */
 export function sum3(a: number, b: number, c: number): number {
   return sum2(a, (sum2(b, c)));
 }

 /**
  * Calculates the sum of two numbers.
  * 
  * @param a - First number
  * @param b - Second number
  * 
  * @internal
  */
export function sum2(a: number, b: number): number {
  const sum = a + b;
  return sum;
}