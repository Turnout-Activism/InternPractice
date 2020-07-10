/**
 * @file snack.js
 * @author: Cameron Senor (Firebase)
 */
export default class Snack{

    /**
    * Constructor
    * @para {String} typeOfSnack - The type of snack (fruit, candy, ect)
    * @para {boolean} isHealthy - True if healthy, false if not.
    */
    constructor(typeOfSnack, isHealthy){
    var type;
    var heathly;
}//closes constructor

/**
* getType() setter method sets type field
*/
getType(){
    return this.type;
}

/**
*  Sets the snack field.
* @param {"String"} typePara - The type of snack
*/
setType(typePara){
    this.type = typePara;
}

/**
* Gets the healthy field.
*/
getHealthy(){
    return this.heathly;
}

/**
* Sets the health field.
* @param {"boolean"} healthyPara - True or false if snack is healthy or not.
*/
setHealthy(healthyPara){
this.heathly = healthyPara;
}
} //Closes class


/**
* Chocolate class
*/
export class Chocolate extends Snack{

/**
 * Constructor
 */
constructor(){
    super("Candy", false) //calling constructor or paraent class
    var cocoPowderPercentage;
    var chocolateType;
}

/**
 * Gets the cocoPowderPercentage field.
 */
getCocoPowderPercentage(){
    return cocoPowderPercentage;

}


/**
 * Sets the cocoPowderPercentage field.
 * @param {String} percentagePara 
 */
setCocoPowderPercentage(percentagePara){
    this.cocoPowderPercentage = percentagePara;
}

/**
 * Gets the chocolateType field
 */
getChocolateType(){
    return this.chocolateType;
}

/**
 * Sets the chocolate type (milk, dark, white)
 * @param {String} typePara 
 */
setChocolateType(typePara){
    this.chocolateType = typePara;
}


}
