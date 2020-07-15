/**
 * @file Some starter code from Disha
 * @author Disha Patel (Mobile App)
 * @author Extended by Juan Becerra
 */


 /**
  * It will return sum of the number
  * @param {number} input
  * @returns number
  */
function sumOfNumber(number) {
  if(typeof number !== "number") {
    throw new TypeError("input must be a number");
  }

  let sum = 0;
  
  if (number > 0) {
    // Positive input
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
  } else {
    // Negative input
    for (let i = -1; i >= number; i--) {
      sum += i;
    }
  }

  return sum;
  
}

export { sumOfNumber }

