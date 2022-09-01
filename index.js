// BIND
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//     // console.log(this)

//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // // Invoking action on Gas mask
// // // Removing Gas mask from inventory

// // // console.log(inventory.items); // ['Knife', 'Medkit']

// // CALL
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(this)

//   console.log(`Invoking action on ${itemName}`);
//   action.call(this, itemName);
// };

// invokeInventoryAction.call(inventory, 'Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.call(inventory,'Gas mask', inventory.remove);
// // // // Invoking action on Gas mask
// // // // Removing Gas mask from inventory

// // // // console.log(inventory.items); // ['Knife', 'Medkit']


// APPLY
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(this)

//   console.log(`Invoking action on ${itemName}`);
//   action.apply(this, [itemName]);
// };

// invokeInventoryAction.apply(inventory, ['Medkit', inventory.add]);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.apply(inventory,['Gas mask', inventory.remove]);
// // // // Invoking action on Gas mask
// // // // Removing Gas mask from inventory

// // // // console.log(inventory.items); // ['Knife', 'Medkit']


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// const book =   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
// }
// const key = 'title'
// console.log(book.title)
// console.log(book['title'])
// console.log(book[key])

// const a = {}

// const key = 'key3'

// a.key1 = 1
// a['key2'] = 2
// a[key] = 3

// console.log(a)

// const book = books[0];
// const keys = Object.keys(book);
// console.log(keys);
// const data = {};

// for (const key of keys) {
//   // console.log('key', key)
//   data[key] = [];
// }

// for (const key in data) {
//   // console.log(data[key])
//     for (const book of books) {
//         console.log(data[key])
//         console.log(book[key])
//     data[key].push(book[key]);
//   }
// }

// console.log(data);

// const add = (a, b) => {
//     console.log(  a + b)
// }

// const multiply = (a, b) => {
//     console.log(a * b)
// }
    
// const subtract = (a, b) => {
//     console.log(  a - b)
// }

// const divide = (a, b) => {
//     console.log(a / b)
// }


// function operations(num1, num2, callback1, callback2) {

//     if (num1 > num2) {
//         callback1(num1, num2)
//     } else {
//         callback2(num1, num2)
//     }
// }

// operations(1, 5, subtract, divide)


