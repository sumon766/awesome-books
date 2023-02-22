let books = [];

const addBtn = document.getElementById('addBook');
const listBox = document.getElementById('list');

class AllBook {
  constructor() {
    this.books = [];
  }

  displayBooks() {
    const book = localStorage.getItem('book');
    if (book === null) {
      this.books = [];
    } else {
      this.books = JSON.parse(book);
    }
    let bookscontainer = '';
    books.forEach((item, index) => {
      bookscontainer += `<div class="book">
        <h3>${item.title}</h3>
        <p>${item.author}</p>
        <button type="button" onClick="bookLibrary.removeBook(${index})">Remove</button>
      </div>`;
    });
    listBox.innerHTML = bookscontainer;
  }

  addBook(title, author) {
    const book = localStorage.getItem('book');
    if (book === null) {
      books = [];
    } else {
      books = JSON.parse(book);
    }
    books.push({
      title,
      author,
    });
    localStorage.setItem('book', JSON.stringify(books));
    this.displayBooks();
  }

  removeBook(index) {
    const book = localStorage.getItem('book');
    books = JSON.parse(book);
    const { title } = books[index];
    const { author } = books[index];
    const bookIndex = books.indexOf(books.find(
      (book) => book.title === title && book.author === author,
    ));
    if (bookIndex !== -1) {
      books.splice(bookIndex, 1);
    }
    localStorage.setItem('book', JSON.stringify(books));
    this.displayBooks();
  }
}

const bookLibrary = new AllBook();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('bookName').value;
  const author = document.getElementById('author').value;
  bookLibrary.addBook(title, author);
});

bookLibrary.displayBooks();
