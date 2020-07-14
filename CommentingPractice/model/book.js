/**
 * @file Name of file
 * @author Adrianna Zhao (UI)
 */

/**
 * @module
 */

export default class Book {
    /**
     *
     * @param {String} title - Title of book
     * @param {String} author - Name of author
     * @param {String} genre - Genre of book
     * @param {int} pages - Number of pages
     */
    constructor(title, author, genre, pages) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
    }

    /**
     * returns title
     */
    title() {
        return this.name;
    }

    /**
     * returns author
     */
    author() {
        return this.author;
    }
    /**
     * returns genre
     */
    genre() {
        return this.genre;
    }
    /**
    * returns number of pages
    */
    numberOfPages() {
        return this.pages;
    }
}

export class BestSeller extends Book {
    /**
     * @param {boolean} isBestSeller - book was on NYT Best Seller's List
     */

    constructor(title, author, genre, pages, isBestSeller) {
        super(title, author, genre, pages);
        this.isBestSeller = isBestSeller;
    }

    /**
     * returns whether book was on NYT Best Seller's List
     */
    isBestSeller() {
        return this.isBestSeller;
    }
}
