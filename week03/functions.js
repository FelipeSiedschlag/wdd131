let firstName = 'Antonia';
let lastName = 'Francesca';

// function fullName(first, last) {
//     first = firstName
//     last = lastName
//     return `${first} ${last}`;
// }

// const fullName = function (first, last) {
//     return `${first} ${last}`;
// }

const fullName = (firstName, lastName) => `${first} ${last}`;

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);