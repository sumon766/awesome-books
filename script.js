let books = [];

const addBtn = document.getElementById('addBook');
const listBox = document.getElementById('list');

function displaybooks() {
  const book = localStorage.getItem('book');
  if (book === null) {
    books = [];
  } else {
    books = JSON.parse(book);
  }
  let bookscontainer = '';
  books.forEach((item, index) => {
    bookscontainer += `<h3 id="">${item.title}</h3>
            <p id="">${item.auther}</p>
            <button type="button" onclick="Remove(${index})">Remove</button>`;
  });
  listBox.innerHTML = bookscontainer;
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('bookName').value;
  const auther = document.getElementById('author').value;
  addBook(title, auther);
});

function addBook (title, auther) {
  const book = localStorage.getItem('book');
  if (book === null) {
    books = [];
  } else {
    books = JSON.parse(book);
  }
  books.push({
    title,
    auther,
  });
  localStorage.setItem('book', JSON.stringify(books));
  displaybooks();
}

function Remove(index) { // eslint-disable-line no-unused-vars
  const book = localStorage.getItem('book');
  books = JSON.parse(book);
  books.splice(index, 1);
  localStorage.setItem('book', JSON.stringify(books));
  displaybooks();
}

displaybooks();
