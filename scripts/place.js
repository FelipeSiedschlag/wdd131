const modification = document.querySelector("#lastmodified");
const year = document.querySelector("#currentyear");
const today = new Date();


// get last modification date and time
const currentYear = new Date();
document.getElementById("currentyear").innerHTML = currentYear.getFullYear();

const lastModifiedDate = new Date(document.lastModified);


lastmodified.innerHTML = `Last modification: <span class="highlight">${new Intl.DateTimeFormat("en-US",
	{
        dateStyle: "short",
        timeStyle: "short",
        // timeZone: "Brasilia,Brazil",
	}
).format(lastModifiedDate)}</span>`;