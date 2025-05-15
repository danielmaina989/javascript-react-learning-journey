class Book {
  constructor(title) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }
}

const book = new Book("JS Basics");
console.log(book.title);
book.title = "Advanced JS";
console.log(book.title);

