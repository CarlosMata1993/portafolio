const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const papers = Array.from(document.querySelectorAll(".paper"));

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Variables para controlar posicion
let currentLocation = 0; //para que sea el mismo que el array
let numOfPapers = papers.length;
let maxLocation = numOfPapers;

// Funciones abierto y cerrado del libro, solo lo mueven para que quede centrado
function openBook(){
    if (window.innerWidth <= 900){
        book.style.transform = "translateX(45%)";
    } else {
        book.style.transform = "translateX(50%)";
    }
}

function closeBook(isAtBeginning){
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
    } else if (window.innerWidth <= 900){
        book.style.transform = "translateX(80%)";
    } else {
        book.style.transform = "translateX(100%)"
    }
}

// Movimiento de las páginas hacia adelante
function goNextPage() {
    // Verifica que no hemos llegado al final del libro
    if (currentLocation < maxLocation) {
        
        // Si estamos en la primera página, abrimos la tapa del libro
        if (currentLocation === 0) {
            openBook();
        }

        // Si todavía estamos dentro del rango de páginas válidas
        if (currentLocation <= numOfPapers) {
            let pageIndex = currentLocation; // Variable que se encarga de sincronizar los papers con la currentLocation
            papers[pageIndex].classList.add("flipped");
            papers[pageIndex].style.zIndex = currentLocation; // Le asigna el valor de currentLocation al paper para que quede visible. Como las paginas van incrementando, siempre va a quedar en con un z index mas alto que la anterior
        }

        currentLocation++; // Avanza la posición actual del libro

        // Si estamos en la última página, cerramos el libro por detrás
        if (currentLocation === numOfPapers) {
            closeBook();
        }
    }
}

// Movimiento de las páginas hacia atrás
function goPrevPage() {
    // Verifica que no estamos en el inicio del libro
    if (currentLocation > 0) {
        let wasAtEnd = currentLocation === numOfPapers; //Para que se active el if de openBook

        currentLocation--; // Retrocede la posición actual primero

        // Si regresamos a la primera página, cerramos el libro hacia adelante
        if (currentLocation === 0) {
            closeBook(true); // Volver a la portada
        }

        // Si estamos dentro del rango válido, desvolteamos la página
        if (currentLocation <= numOfPapers) {
            let pageIndex = currentLocation;
            papers[pageIndex].classList.remove("flipped");
            papers[pageIndex].style.zIndex = numOfPapers - pageIndex; // Disminuye el z-index para mantener el orden visual correcto
        }

        // Si volvemos desde la contraportada, reabrimos el libro
        if (wasAtEnd) {
            openBook();
        }
    }
}