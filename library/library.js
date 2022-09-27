const initialData = [
  {
    id: "1",
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
  },
  {
    id: "2",
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
  },
  {
    id: "3",
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
  },
];

if (localStorage.getItem("books") === null) {
  localStorage.setItem("books", JSON.stringify(initialData));
}

const leftDiv = document.createElement("div");
const rightDiv = document.createElement("div");

leftDiv.classList.add("left");
rightDiv.classList.add("right");

const rootDiv = document.querySelector("#root");

rootDiv.append(leftDiv, rightDiv);

const title = document.createElement("h1");
title.textContent = "Library";
const list = document.createElement("ul");
const addBtn = document.createElement("button");
addBtn.textContent = "ADD";

leftDiv.append(title, list, addBtn);

function renderBooksList() {
  const books = JSON.parse(localStorage.getItem("books"));
  const markup = books
    .map(({ title, id }) => {
      return `<li data-id=${id}><p class='book-title'>${title}</p><button class='edit'>Edit</button><button class='delete'>Delete</button></li>`;
    })
    .join("");
  list.innerHTML = "";
  list.insertAdjacentHTML("afterbegin", markup);
  const bookTitles = document.querySelectorAll(".book-title");
  bookTitles.forEach((elem) => elem.addEventListener("click", renderPreview));
  const delBtns = document.querySelectorAll(".delete");
  delBtns.forEach((elem) => elem.addEventListener("click", deleteBook));
  const editBtns = document.querySelectorAll(".edit");
  editBtns.forEach((elem) => elem.addEventListener("click", editBook));
}

renderBooksList();

function renderPreview(event) {
  const books = JSON.parse(localStorage.getItem("books"));
  const bookID = event.target.parentNode.dataset.id;
  const book = books.find(({ id }) => id === bookID);
  const markup = createPreviewMarkup(book);
  console.log(markup);
  rightDiv.innerHTML = markup;
}

function createPreviewMarkup({ title, author, img, plot, id }) {
  return `<div id='${id}' class='preview'>
<h2>${title}</h2>
<p>${author}</p>
<img src='${img}'/>
<p>${plot}</p>
</div>`;
}

function deleteBook(event) {
  const books = JSON.parse(localStorage.getItem("books"));
  const bookID = event.target.parentNode.dataset.id;
  const filteredArray = books.filter(({ id }) => id !== bookID);
  localStorage.setItem("books", JSON.stringify(filteredArray));
  const preview = document.querySelector(".preview");
  if (preview !== null && bookID === preview.id) {
    rightDiv.innerHTML = "";
  }
  renderBooksList();
}

addBtn.addEventListener("click", addBook);

function addBook() {
  const newBook = {
    id: `${Date.now()}`,
    title: "",
    author: "",
    img: "",
    plot: "",
  };
  const markup = createFormMarkup(newBook);
  rightDiv.innerHTML = markup;
  fillObject(newBook);
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const books = JSON.parse(localStorage.getItem("books"));
    const values = Object.values(newBook);
    if (values.some((value) => value === "")) {
      alert("Fill all fields!");
      return;
    }
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
    renderBooksList();
    const markup = createPreviewMarkup(newBook);
    rightDiv.innerHTML = markup;
  });
}

function createFormMarkup({ title, author, img, plot }) {
  return `<form>
    <label>Name:<input type='text' name='title' value='${title}'/></label>
    <label>Author:<input type='text' name='author' value='${author}'/></label>
    <label>Image:<input type='text' name='img' value='${img}'/></label>
    <label>Plot:<input type='text' name='plot' value='${plot}'/></label>
    <button>Save</button>
  </form>`;
}

function fillObject(book) {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => input.addEventListener("change", changeHandler));
  function changeHandler(event) {
    book[event.target.name] = event.target.value;
  }
}

function editBook(event) {
  const books = JSON.parse(localStorage.getItem("books"));
  const bookID = event.target.parentNode.dataset.id;
  const book = books.find(({ id }) => id === bookID);
  const markup = createFormMarkup(book);
  rightDiv.innerHTML = markup;
  fillObject(book);
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const books = JSON.parse(localStorage.getItem("books"));
    const values = Object.values(book);
    if (values.some((value) => value === "")) {
      alert("Fill all fields!");
      return;
    }
    const index = books.findIndex(({ id }) => id === bookID);
    books[index] = book;
    localStorage.setItem("books", JSON.stringify(books));
    renderBooksList();
    const markup = createPreviewMarkup(book);
    rightDiv.innerHTML = markup;
  });
}
