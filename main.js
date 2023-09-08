// global variables
const myLibrary = [];
const addBookBtn = document.querySelector("#addBook");
const books = document.querySelector(".books");
const dialog = document.getElementById("dialog");
const currentYear = new Date().getFullYear();
const closeDialogBtn = document.querySelector(".closeDialog");
const submitBtn = document.querySelector("#submit");
const errorField = document.querySelector(".errorField");
const deleteBtn = document.querySelector(".deleteBtn");
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let yearInput = document.querySelector("#year");
let pagesInput = document.querySelector("#pages");
let statusInput = document.querySelector("#status");
//
// get current year for the add book check
document.getElementById("year").max = currentYear;
//
// Functions :
function Book(title, year, author, pages, status) {
  this.title = title;
  this.year = year;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(obj) {
  myLibrary.push(obj);
}

function displayLastBook(arr) {
  const table = document.getElementById("libTable");
  const lastBook = arr[arr.length - 1];
  const lastBookIndex = [arr.length - 1];
  // element.setAttribute('data-custom', 'yourValue');
  let tr = table.insertRow();
  tr.setAttribute("data-index", `${lastBookIndex}`);
  let titleCell = tr.insertCell();
  titleCell.textContent = lastBook.title;
  let authorCell = tr.insertCell();
  authorCell.textContent = lastBook.author;
  let yearCell = tr.insertCell();
  yearCell.textContent = lastBook.year;
  let pagesCell = tr.insertCell();
  pagesCell.textContent = lastBook.pages;
  let statusCell = tr.insertCell();
  statusCell.classList.add("bookStatus");
  statusCell.textContent = lastBook.status;
  let modifyCell = tr.insertCell();
  let deleteVar = document.createElement("button");
  deleteVar.textContent = "Delete";
  deleteVar.classList.add("deleteBtn", "btn");
  let status = document.createElement("button");
  status.textContent = "Status";
  status.classList.add("statusBtn", "btn");
  modifyCell.appendChild(deleteVar);
  modifyCell.appendChild(status);
}

function submitBook(e) {
  e.preventDefault();
  let book = new Book(
    titleInput.value,
    yearInput.value,
    authorInput.value,
    pagesInput.value,
    statusInput.value
  );

  addBookToLibrary(book);
  displayLastBook(myLibrary);
  dialog.close();
}

function deleteListener(event) {
  let element = event.target;
  if (element.classList.contains("deleteBtn")) {
    console.log("hi");
    let closestRow = element.closest("[data-index]");
    let rowIndex = closestRow.getAttribute("data-index");
    myLibrary.splice(rowIndex, 1);
    closestRow.remove();
    console.log(closestRow);
    console.log(rowIndex);
  }
}

function statusToggle(event) {
  let element = event.target;
  if (element.classList.contains("statusBtn")) {
    console.log("statusToggle clicked");
    let closestRow = element.closest("[data-index]");
    console.log(closestRow);
    let statusChangeCell = closestRow.querySelector(".bookStatus");
    console.log(statusChangeCell);
    if (statusChangeCell.textContent === "Read") {
      statusChangeCell.innerText = "Not Read";
    } else if (statusChangeCell.textContent === "Not Read") {
      statusChangeCell.innerText = "Read";
    }
  }
}
////// Event Listeners:
document.addEventListener("click", statusToggle);
document.addEventListener("click", deleteListener);
submitBtn.addEventListener("click", function (e) {
  submitBook(e);
});
closeDialogBtn.addEventListener("click", function () {
  dialog.close();
});

addBookBtn.addEventListener("click", function () {
  dialog.showModal();
});

//

/* Books i used to test, ignore please :)
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
*/
