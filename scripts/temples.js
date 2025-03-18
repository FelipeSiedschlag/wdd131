
function toggleMenu() {
    const nav = document.querySelector("nav");
    const navBtn = document.querySelector(".nav-btn");


    nav.classList.toggle("open");

    navBtn.textContent = nav.classList.contains("open") ? "x" : "☰";
}


window.addEventListener("resize", function() {
    const navBtn = document.querySelector(".nav-btn");
    const nav = document.querySelector("nav");


    if (window.innerWidth >= 800) {
        nav.classList.remove("open"); //
        navBtn.textContent = "☰";
    }
});




const modification = document.querySelector("#lastmodified");
const year = document.querySelector("#currentyear");
const today = new Date();

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