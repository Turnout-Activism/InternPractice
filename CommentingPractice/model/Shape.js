/**
 * @file Shape.js
 * @description A class used to create 2D shape representations. No renderer is provided.
 * @author Juan Becerra
 * 
 * @module
 */

export class Shape
{
    /**
     * @abstract
     * @description Constructs a shape. Intended to be used by concrete class.
     * 
     * @param {String} name - Alias for shape
     */
    constructor(name)
    {
        this.name = name;
    }

    /**
     * @description Logs description of class
     * @abstract
     * 
     * @throws Error message, as this method must be implemented by concrete class.
     */
    LogInfo()
    {
        throw new Error("Shape is an abstract class! Please implement a concrete shape.");
    }

}

export class Circle extends Shape
{
    /**
     * @description Constructs circle with a given radius.
     * 
     * @param {String} name - Alias for circle
     * @param {float} radius - Units that represent radius of circle
     */
    constructor(name, radius)
    {
        super(name);

        this.radius = radius;
    }

    /**
     * @description Logs member variables of circle
     */
    LogInfo()
    {
        console.log(this.name + " is a circle with a radius of " + this.radius);
    }

    /**
     * @description Sets the radius of circle
     * 
     * @param {float} radius 
     */
    SetRadius(radius)
    {
        this.radius = radius;
    }

    /**
     * @description Returns radius of circle
     * 
     * @returns {float} radius of circle
     */
    GetRadius()
    {
        return this.radius;
    }
}

export class Rectangle extends Shape
{
    /**
     * @description Constructs a rectangle with a given width and height
     * 
     * @param {String} name 
     * @param {float} width 
     * @param {float} height 
     */
    constructor(name, width, height)
    {
        super(name);

        this.width = width;
        this.height = height;
    }

    /**
     * @description Logs member variables of rectangle
     */
    LogInfo()
    {
        console.log(this.name + " is a rectangle with a width of " + this.width + 
                    " and a height of " + this.height);
    }

    /**
     * @description Sets width of rectangle
     * 
     * @param {float} width 
     */
    SetWidth(width)
    {
        this.width = width;
    }

    /**
     * @description Returns width of rectangle
     * 
     * @returns width of rectangle
     */
    GetWidth()
    {
        return this.width;
    }

    /**
     * @description Sets height of rectangle
     * 
     * @param {float} height 
     */
    SetHeight(height)
    {
        this.height = height;
    }

    /**
     * @description Gets height of rectangle
     * 
     * @returns height of rectangle
     */
    GetHeight()
    {
        return this.height;
    }
}