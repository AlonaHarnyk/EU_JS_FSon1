// const books = [
//   {
//     id: "1",
//     title: `Apple. Эволюция компьютера`,
//     author: `Владимир Невзоров`,
//     img: `https://bukva.ua/img/products/449/449532_200.jpg`,
//     plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно
//     и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории
//     персональных компьютеров в целом.
//     В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей,
//     сопровождающиеся большим количеством оригинальных студийных фотографий.
//     Книга предназначена для широкого круга читателей, интересующихся историей электроники.
//     Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
//   },
//   {
//     id: "2",
//     title: `Как объяснить ребенку информатику`,
//     author: `Кэрол Вордерман`,
//     img: `https://bukva.ua/img/products/480/480030_200.jpg`,
//     plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах
//     в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы,
//     оставаясь в безопасности.
//     Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве,
//     от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном
//     обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина -
//     объясняются наглядно с помощью иллюстраций и схем.`,
//   },
//   {
//     id: "3",
//     title: `Путь скрам-мастера. #ScrumMasterWay`,
//     author: `Зузана Шохова`,
//     img: `https://bukva.ua/img/products/480/480090_200.jpg`,
//     plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой.
//     Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными
//     знаниями будете в течение всей карьеры.
//     Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера,
//     как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером,
//     какими инструментами ему нужно пользоваться.`,
//   },
// ];

// const div1 = document.querySelector('div')
// console.log(div1)

// const div2 = document.querySelector('.root')
// console.log(div2)

// const div3 = document.querySelector('#root')
// console.log(div3)

// const divs = document.querySelectorAll('div')
// console.log(divs)

// console.log(document.querySelectorAll('li'))
// const list1 = document.querySelector('.list1')
// console.log(list1.querySelectorAll('li'))

// console.log(list1.parentNode)

// console.log(list1.children)

// const address = document.querySelector('address')
// console.log(address.firstElementChild)

// console.log(list1.nextSibling)

// const input = document.querySelector('input')

// console.log(input)

// input.value = '12345'
// console.log(input.name)

// const paragraph = document.querySelector('.text')
// console.log(paragraph.textContent)
// paragraph.textContent = 'Hello!'
// paragraph.classList.add('color')
// // paragraph.classList.remove('color')
// console.log(paragraph.classList.contains('color'))

// paragraph.style.fontSize = "36px";
// paragraph.style.backgroundColor = "yellow";

// const image = document.querySelector("img");
// image.alt = "Amazing nature"

// console.log(image.attributes)

// image.setAttribute("alt", "Amazing nature");

// const saveBtn = document.querySelector('[data-action="save"]');
// const closeBtn = document.querySelector('[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const start = document.getElementById('start')
// console.log(start)
// const p = document.createElement('p')
// console.log(p)
// p.textContent = 'I am div!'
// p.classList.add('color')
// start.append(p)
// // p.remove()

// const inner = document.querySelector('.inner')
// // console.log(inner)
// // inner.innerHTML = 'qwerty'
// // inner.innerHTML = 'qwerty!!!'
// // console.log(inner.innerHTML)
// // inner.innerHTML = ''

// const markup = '<span>Test!</span>'

// inner.insertAdjacentHTML('beforeend', markup)

// const array = [
//   {
//     a: "1",
//     b: "2",
//   },
//   {
//     a: "3",
//     b: "4",
//   },
//   {
//     a: "5",
//     b: "6",
//   },
// ];

// const ul = document.querySelector('.example')

// const superMarkup = array.map(({ a, b }) => `<li><span>${a}</span><span>${b}</span></li>`).join('')

// console.log(superMarkup)

// ul.insertAdjacentHTML('afterbegin', superMarkup)

// const button = document.querySelector('.btn')

// button.addEventListener('click', clickHandler)

// function clickHandler(event) {
//   // console.log(this)
//   // console.log('I am clicked!')
//   console.log(event)
//   console.log(event.target)
// }

// const mango = {
//   username: "Mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector(".btn");

// // ✅ Работает
// mango.showUsername();

// // ❌ this будет ссылаться на button если использовать showUsername как callback
// btn.addEventListener("click", mango.showUsername); // не работает

// // ✅ Не забывайте привязывать контекст методов объекта
// btn.addEventListener("click", mango.showUsername.bind(mango));

// window.addEventListener("keydown", event => {
//   console.log(event)
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
//   if (event.key === 'q') {
//     console.log('Hello!')
//   }
// });

// const textInput = document.querySelector(".input");

// // textInput.addEventListener("input", (event) => {
// //   console.log(event.target.value)
// // });

// // textInput.addEventListener("focus", () => {
// //   textInput.value = "This input has focus";
// // });

// textInput.addEventListener("blur", () => {
//   console.log('blur')
// }); 

// // textInput.addEventListener("change", () => {
// //   console.log('change')
// // });


// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   console.log(event.target.elements)
//   const {
//     elements: { login, password }
//   } = event.target;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.target.reset();
// }

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   console.log(event.target.elements)
//   const {
//     elements: { email, password }
//   } = event.target;


//   console.log(email.value)

//   console.log(password.value)

//   console.log(
//     {
      
//     }
//   )
//   // if (login.value === "" || password.value === "") {
//   //   return console.log("Please fill in all the fields!");
//   // }

//   // console.log(`Login: ${login.value}, Password: ${password.value}`);
//   // event.target.reset();
// }