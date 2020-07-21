/**
 * @file dogs.js
 * @author Ido Katz
 */


export default class Dogs {

    /** 
    * @description creates a Dogs object with a breed and age parameter 
    *
    * Constructor
    * @param {string} breed - breed of Dog 
    * @param {int} age - age of Dog in years
    * 
    */
    constructor(breed, age) {
        this.breed = breed;
        this.age = age;
    }

    //function will return the breed of Dog.
    getBreed() {
        return this.breed;
    }
    //function will return the age of Dog.
    getAge() {
        return this.age;
    }

    //function will set the Breed of dog 
    /**
     * @param {string} breed - breed of Dog
     */
    setBreed(breed) {
        this.breed = breed;
    }
    //function will set the age of dog 
    /**
     * @param {int} age - age of Dog
     */
    setBreed(age) {
        this.breed = age;
    }

}

/**
* Labrador Class
*/
export class Labrador extends Dogs {

    /**
    * Constructor
    */
    constructor(age, color) {
        super("Labrador") //calling constructor or paraent class
        this.age = age;
        this.color = color;
    }

    //function will return the color of Dog.
    getColor() {
        return this.color;
    }

    //function will set the color of dog 
    /**
     * @param {String} color - color of Dog
     */
    setBreed(color) {
        this.breed = color;
    }
