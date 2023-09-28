///Задача №1: Печатное издание

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;
    }

    set state(value) {
        if (value < 0) {
            return this._state = 0;
        }
        else if (value > 100) {
            return this._state = 100;
        }
        else {
            return this._state = value;
        }
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

///Задача №2: Библиотека

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = books = [];
    }

    addBook(book) {
        if (book.state >= 30) {
            return this.books.push(book)
        }
    }

    findBookBy(type, value) {
        const searchResult = this.books.find((elem) => {
            return elem[type] === value
        });
        
        if (searchResult === undefined) {
            return null
        };

        return searchResult;
    }

    giveBookByName(bookName) {
        const searchBook = this.books.find((elem) => {
            return elem.name === bookName
        });

        if (searchBook === undefined) {
            return null
        };

        const givenBook = this.books[searchBook];
        this.books.splice(searchBook, 1)
        return searchBook;
    }
}