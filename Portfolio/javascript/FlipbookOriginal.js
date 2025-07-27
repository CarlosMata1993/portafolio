const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");

//Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

//Variables que controlan la posicion y el movimiento
let currentLocation = 1;
let numOfPapers = 6;
let maxLocation = numOfPapers + 1; //CurrentLocation 1 empieza por la portada del libro, 2 es la contraportada y el frente de la segunda pagina, y asi... es 1 más que el numOfPapers porque la parte trasera (cuando el libro se cierra) no cuenta como "pagina". Así que currentLocation 1 es la portada, 2 es hasta el frente de la pagina 2... 6 es el frente de la pagina 6, donde estas viendo la parte trasera de la pagina 5 y el frente de la 6, por eso el +1, para el cierre del libro.

//Functions
function openBook(){
    if (window.innerWidth <= 900){
        book.style.transform = "translateX(45%)";
        prevBtn.style.transform = "TranslateX(-1px)";
        nextBtn.style.transform = "TranslateX(1px)"
    } else {
        book.style.transform = "translateX(50%)";
    }
    
}

function closeBook(isAtBeginning){ //Cuando la función de cerrar el libro se invoca al principio, el parámetro será true, pero cuando se invoca al final, el parámetro será false, si es true, no mueve el libro al cerrarlo (cuando se invoca la funcion), cuando ya no es true si lo mueve al cerrarlo
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
    } else if (window.innerWidth <= 900){
        book.style.transform = "translateX(80%)";
    } else {
        book.style.transform = "translateX(100%)"
    }
}

function goNextPage(){
    if(currentLocation < maxLocation){ //confirma si ha llegado a la ultima pagina. si no ha llegado, prosigue
        switch(currentLocation){ //dicta el compoortamiento de cada pagina segun el valor de currentLocation
            case 1: //en la pagina 1 llama la funcion open book, le añade la clase "flipped" y cambia su z index
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2: //si la currentLocation es la pagina 2: le añade la clase "flipped" y cambia su z index
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3: 
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4: 
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5: 
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6: 
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                closeBook();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++ //por cualquiera de las condiciones que pase, incrementa la variable currenLocation para seguir controlando la posicion
    }
}

function goPrevPage(){
    if(currentLocation > 1){ //confirma si la variable se encuentra en una pagina que NO sea uno, para evitar ir a una pagina que no existe
        switch(currentLocation){
            case 2: // Se está en la página 2 (currentLocation 2) y retrocede a la página 1 (la portada del libro). Por eso empieza desde 2, para evitar ir más allá de la portada.
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 6;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 5;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 4;
                break;
            case 5:
                paper4.classList.remove("flipped")
                paper4.style.zIndex = 3
                break;
            case 6:
                paper5.classList.remove("flipped")
                paper5.style.zIndex = 2
                break;
            case 7:
                openBook();
                paper6.classList.remove("flipped")
                paper6.style.zIndex = 1
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}