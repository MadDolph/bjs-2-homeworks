class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
   }

    fix() {
        this._state = 1.5 * this._state;
        this.state = this._state;
    }

    set state(state) {
        if(state < 0) {
            state = 0;
        } else if(state > 100) {
            state = 100;
            }
        this._state = state; 
    }

    get state() {
        return this._state;
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

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        } else {
            return false;
            }   
    }

    findBookBy(type, value) {
       let result = this.books.find(el => el[type] == value);
       if(result) {
            return result;  
       } else {
            return null;
       }
    }

    giveBookByName(bookname) {
        let result = this.findBookBy("name", bookname);
        if(result) {
            let index = this.books.indexOf(result);
            this.books.splice(index);
        }    
        return result;
    }
}

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};  
    }

    addMark(mark, subject) { //наворочено, можно проще (про весь код данного метода)
        if(mark < 6 && mark > 1) {
            if([subject] in this.marks) {
                this.marks[subject].push(mark);    
            } else {
                 this.marks[subject] = [];
                 this.addMark(mark, subject);
              }
        } else {
            return;
          }
    }

    getAverageBySubject(subject) {
        if([subject] in this.marks) {
            let Average = this.marks[subject].reduce((total, mark) => total + mark, 0);
            return Average / this.marks[subject].length ;
        } else {
            return 0;
          }
    }

    getAverage() {
        let totalAverage = 0;
        let Average;
        let subjects = Object.keys(this.marks);
        if(subjects.length != 0) {
            for(let el of subjects) {
                Average = this.getAverageBySubject(el);
                totalAverage += Average;
            }
            return totalAverage / subjects.length;
        } else {
            return 0;
        }
    }
}