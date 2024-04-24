class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

const myBook = new Book("One Indian Girl", "Chetan Bhagat", 2016);
console.log(myBook.getSummary());
