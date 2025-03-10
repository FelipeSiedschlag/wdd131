const modification = document.querySelector("#lastmodified");
const year = document.querySelector("#currentyear");
const today = new Date();

const currentYear = new Date();
document.getElementById("currentyear").innerHTML = currentYear.getFullYear();




lastmodified.innerHTML = `Last modification: <span class="highlight">${new Intl.DateTimeFormat("en-US",
	{
        dateStyle: "short",
        timeStyle: "short",
        // timeZone: "Brasilia,Brazil",
	}
).format(today)}</span>`;
