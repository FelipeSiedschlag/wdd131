const n = 6; // number of days forward

const output = document.getElementsByTagName("ul"); // get output location on document to append within list

const options = { weekday: 'long' };



//program starts here
const today = new Date();

// TODAY test output
                        // options = "Refers to the constant at the beginning, which sets each day as a full name, like 'Monday', 'Tuesday', 'Wednesday'."
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);

document.getElementById('today').innerHTML = `Today is ${todaystring}. `;



// next days
for (i = 0; i <= n; i++) {
    let nextday = new Date();

    nextday.setDate(today.getDate() + 1);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    
    let item = document.createElement("li"); // list item
    item.textContent = nextdaystring;

    output[0].apendChild(item);
}