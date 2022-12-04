class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
const novel = new Book('anonymous');

// console.log(novel._author);
// novel._author = 'newAuthor';
// console.log(novel._author);

//Getters and setters are important because they hide internal implementation details.
console.log(novel.writer);
novel.writer = 'anotherNewAuthor';
console.log(novel.writer);