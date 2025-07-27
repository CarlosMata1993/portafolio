const button = document.querySelector(".burger-button")
const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll("nav a")

//Menu toggle
button.addEventListener("click", () => {
    nav.classList.toggle("display-nav")
})

//Para remover el dropdown menu en dispositivos moviles al hacer click sobre un link
navLinks.forEach(navLink => {
    if (window.innerWidth <= 800) {
        navLink.addEventListener("click", () => {
            nav.classList.remove("display-nav")
        })
    }
})