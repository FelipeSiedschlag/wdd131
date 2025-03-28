let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

// let nameB = names.filter(function (name) {
//     return name.charAt(0) === 'B'
// })

// let nameC = names.filter(name => name.charAt(0) === 'B');


// namesLenght = names.map((name) => name.lenth);

names.reduce((total, name) => total + name.length, 0) / names.length;