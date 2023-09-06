const myLibrary = [];
const library = document.querySelector(".library");
const addBookBtn = document.querySelector("#addBook");
const books = document.querySelector(".books");
const dialog = document.getElementById("dialog");
const currentYear = new Date().getFullYear();
const closeDialogBtn = document.querySelector(".closeDialog");
document.getElementById("year").max = currentYear;
closeDialogBtn.addEventListener("click", function () {
  dialog.close();
});
addBookBtn.addEventListener("click", function () {
  dialog.showModal();
});
function Book(title, year, author, pages, status) {
  this.title = title;
  this.year = year;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const book1 = new Book(
  "The Great Gatsby",
  1925,
  "F. Scott Fitzgerald",
  764,
  "Not Read"
);
const book2 = new Book(
  "Pride and Prejudice",
  1813,
  "Jane Austen",
  259,
  "Not Read"
);
const book3 = new Book(
  "Don Quixote",
  1605,
  "Miguel de Cervantes",
  1072,
  "Not Read"
);
const book4 = new Book(
  "To Kill a Mockingbird",
  1960,
  "Harper Lee",
  281,
  "Read"
);
function addBookToLibrary(obj) {
  myLibrary.push(obj);
}
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

function displayBooks(arr) {
  const table = document.getElementById("libTable");
  for (let i = 0; i < arr.length; i++) {
    let currentBook = arr[i];
    let tr = table.insertRow();
    let titleCell = tr.insertCell();
    titleCell.textContent = currentBook.title;
    let authorCell = tr.insertCell();
    authorCell.textContent = currentBook.author;
    let yearCell = tr.insertCell();
    yearCell.textContent = currentBook.year;
    let pagesCell = tr.insertCell();
    pagesCell.textContent = currentBook.pages;
    let statusCell = tr.insertCell();
    statusCell.textContent = currentBook.status;
    let modifyCell = tr.insertCell();
    let deleteVar = document.createElement("button");
    deleteVar.textContent = "Delete";
    deleteVar.classList.add("deleteBtn", "btn");
    let status = document.createElement("button");
    status.textContent = currentBook.status;
    status.classList.add("StatusBtn", "btn");
    modifyCell.appendChild(deleteVar);
    modifyCell.appendChild(status);
  }
}
displayBooks(myLibrary);
