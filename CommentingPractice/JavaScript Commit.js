/**This is my first comment
 * Represents a van
 * @class
 * @param {int} num_doors
 * @param {string} brand
 * @param {string} color
 */

 class Van (num_doors,brand,color)
 {
    this.doors = num_doors;
    this.brand = brand;
    this.color = color;
 }
 
 print() 
 {
    return "My van is a " + this.color + this.brand + "and has " + this.doors + "."
 }

 van1 = new Van(4,"Toyota","red");  

 document.getElementById("demo").innerHTML = van1.print();

