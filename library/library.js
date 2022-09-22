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

localStorage.setItem('books', JSON.stringify(initialData))



const leftDiv = document.createElement('div')
const rightDiv = document.createElement('div')

leftDiv.classList.add('left')
rightDiv.classList.add('right')

const rootDiv = document.querySelector('#root')

rootDiv.append(leftDiv, rightDiv)

const title = document.createElement('h1')
title.textContent = 'Library'
const list = document.createElement('ul')
const addBtn = document.createElement('button')
addBtn.textContent = "ADD"

leftDiv.append(title, list, addBtn)

function renderBooksList() {
  const books = JSON.parse(localStorage.getItem('books'))
  const markup = books.map(({ title, id }) => { return `<li data-id=${id}><p class='book-title'>${title}</p><button>Edit</button><button>Delete</button></li>` }).join('')
  list.insertAdjacentHTML('afterbegin', markup)
  const bookTitles = document.querySelectorAll('.book-title')
bookTitles.forEach(elem => elem.addEventListener('click', renderPreview))
}

renderBooksList()

function renderPreview(event) {
  const books = JSON.parse(localStorage.getItem('books'))
  const bookID = event.target.parentNode.dataset.id
  const book = books.find(({ id }) => id === bookID)
  console.log(book)
}

