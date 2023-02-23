var header = document.getElementById("menu");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

let books = [];

const addBtn = document.getElementById('add_Book');
const listBox = document.getElementById('list');

class AllBook {
  displayBooks() {
    const book = localStorage.getItem('book');
    this.book = book;
    if (this.book === null) {
      books = [];
    } else {
      books = JSON.parse(book);
    }
    let bookscontainer = '';
    books.forEach((item, index) => {
      bookscontainer += `<div class="book">
        <p>"${item.title}" by ${item.author}</p>
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
