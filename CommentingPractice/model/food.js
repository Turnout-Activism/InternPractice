/**
 * @file Food file
 * @author Iniya Rajamani
 */

/**
 * @module
 */

export class Food
{
    /**
     *
     * @param {String} name - Name of Food
     * @param {int} calories - Number of Calories in one serving
     * @param {String} type - Breakfast/Lunch/Dinner/Dessert/Snack
     */

    constructor(name, calories, type)
    {
        this.name = name;
        this.calories = calories;
        this.type = type;
    }

    /**
     * returns food name
     */
    getName()
    {
        return this.name;
    }

    /**
     * sets name of food
     */
    setName(newName)
    {
        this.name = newName;
    }

    /**
     * returns number of calories
     */
    getCalories()
    {
        return this.calories;
    }

    /**
     * sets number of calories
     */
    setCalories(newCalories)
    {
        this.calories = newCalories;
    }

    /**
     * returns type of food
     */
    getType()
    {
        return this.type;
    }

    /**
     * sets type of food
     */
    setType(newType)
    {
        this.type = newType;
    }

    /**
     * returns a summary string
     */
    toString()
    {
        return this.name + " usually has " + this.calories + " calories and is eaten as " + this.type;
    }
}

export class Fruit extends Food
{
    /**
     *
     * @param {String} color - Color of fruit
     * @param {String} taste - Sour/Sweet/Bitter
     */

    constructor(color, taste)
    {
        this.color = color;
        this.taste = taste;
    }

    /**
     * returns color of fruit
     */
    getColor()
    {
        return this.color;
    }

    /**
     * sets color of fruit
     */
    setColor(newColor)
    {
        this.color = newColor;
    }

    /**
     * returns taste of fruit
     */
    getTaste()
    {
        return this.taste;
    }

    /**
     * sets taste of fruit
     */
    setTaste(newTaste)
    {
        this.taste = newTaste;
    }
}